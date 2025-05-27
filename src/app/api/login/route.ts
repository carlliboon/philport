import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
// Handle POST request - login validation
export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [rows]: any = await connection.execute(
      "SELECT id, username, password FROM users WHERE username = ?",
      [email]
    );

    await connection.end();

    const user = rows[0];

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found." },
        { status: 401 }
      );
    }

    // NOTE: For production use, store hashed passwords and use bcrypt.compare
    if (user.password !== password) {
      return NextResponse.json(
        { success: false, message: "Incorrect password." },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      user: { id: user.id, username: user.username },
    });
  } catch (error: unknown) {
    return NextResponse.json(
      {
        message: "Failed to login.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
