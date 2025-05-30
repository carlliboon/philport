export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import mysql from "mysql2/promise";

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";

    // If JSON payload – save to MySQL
    if (contentType.includes("application/json")) {
      const body = await req.json();

      const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
      });

      const [result] = await connection.execute(
        `INSERT INTO users (
          username,
          first_name,
          last_name,
          gender,
          phone_number,
          street_address,
          resume,
          primary_id_photo,
          skills,
          shopify_url,
          additional_info,
          verification_status,
          role,
          email,
          password,
          created_at,
          updated_at
        ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, NOW(), NOW())`,
        [
          body.email, // username
          body.first_name,
          body.last_name,
          body.gender,
          body.phone_number,
          body.street_address,
          body.resume,
          body.primary_id_photo,
          body.skills,
          body.shopify_url,
          body.additional_info,
          'pending',
          'user',
          body.email,
          '', // default password placeholder
        ]
      );

      await connection.end();

      const insertId = (result as { insertId: number }).insertId;
      return NextResponse.json({ success: true, id: insertId });
    }

    // Fallback multipart resume upload (original behaviour)
    const formData = await req.formData();
    const resumeFile = formData.get("resume") as File | null;

    if (!resumeFile) {
      return NextResponse.json(
        { message: "Resume file is required." },
        { status: 400 }
      );
    }

    // 🟢 Upload resume to Supabase
    const fileExt = resumeFile.name.split(".").pop();
    const fileName = `resume-${Date.now()}.${fileExt}`;

    const arrayBuffer = await resumeFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const { error: uploadError } = await supabase.storage
      .from("resume")
      .upload(fileName, buffer, {
        cacheControl: "3600",
        upsert: false,
        contentType: resumeFile.type,
      });

    if (uploadError) {
      return NextResponse.json(
        { message: "Failed to upload resume.", error: uploadError.message },
        { status: 500 }
      );
    }

    // 🟢 Get public URL
    const { data: publicUrlData } = supabase.storage
      .from("resume")
      .getPublicUrl(fileName);

    return NextResponse.json({
      message: "Resume uploaded successfully.",
      resumeUrl: publicUrlData.publicUrl,
    });
  } catch (err: unknown) {
    return NextResponse.json(
      {
        message: "Failed to process request.",
        error: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
