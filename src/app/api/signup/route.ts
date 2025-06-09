export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import mysql from "mysql2/promise";
import type { ResultSetHeader } from "mysql2";
import { generateFileName } from "@/lib/utils";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const contentType = req.headers.get("content-type") || "";

    // If JSON payload – save to MySQL
    if (contentType.includes("application/json")) {
      const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
      });

      const [execResult] = await connection.execute<ResultSetHeader>(
        `INSERT INTO users ( username, first_name, last_name, gender, phone_number, street_address, resume,
          primary_id_photo, skills, shopify_url, additional_info, verification_status, role, email, password, created_at, updated_at
        ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, NOW(), NOW())`,
        [ body.email, body.first_name, body.last_name, body.gender, body.phone_number, body.street_address, body.resume,
          body.primary_id_photo, body.skills, body.shopify_url, body.additional_info, 'pending', 'user', body.email, '' ]
      );

      // Get the ID of the newly inserted user
      const insertId = execResult.insertId;

      await connection.end();

      // Return the ID of the newly inserted user
      return NextResponse.json(
        { success: true, message: "Application received.", id: insertId },
        { status: 200 }
      );
    }

    // Fallback multipart resume upload (original behaviour)
    const formData = await req.formData();
    const resumeFile = formData.get("resume") as File | null;

    // If no resume file is provided, return an error
    if (!resumeFile) {
      return NextResponse.json(
        { message: "Resume file is required." },
        { status: 400 }
      );
    }

    // Upload resume to Supabase
    const fileName = generateFileName({
      prefix: 'resume',
      originalName: resumeFile.name,
      userId: body.last_name,
      timestamp: false // Don't use timestamp for resumes to keep names clean
    });

    // Convert the uploaded file to a buffer for storage/processing
    // This is necessary because:
    // 1. File uploads come as ArrayBuffer which needs to be converted to Buffer for Node.js operations
    // 2. Buffer format is required for file storage systems and many Node.js file operations
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
    console.error('Signup API error:', err);
    console.error('Request body:', body);
    return NextResponse.json(
      {
        message: "Failed to process request.",
        error: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
