import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    // Query to get all users (excluding sensitive password data)
    const [rows] = await connection.execute(
      "SELECT id, username, password, created_at FROM users ORDER BY created_at DESC"
    );

    await connection.end();

    return NextResponse.json({
      message: "Users retrieved successfully!",
      users: rows,
      count: Array.isArray(rows) ? rows.length : 0,
    });
  } catch (error: unknown) {
    return NextResponse.json(
      {
        message: "Failed to retrieve users.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
