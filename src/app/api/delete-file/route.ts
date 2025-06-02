import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// This route only runs on the server, so we can safely read the service-role key.
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const { bucket, path } = (await request.json()) as {
      bucket: string;
      path: string;
    };

    const { error } = await supabaseAdmin.storage.from(bucket).remove([path]);
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
} 