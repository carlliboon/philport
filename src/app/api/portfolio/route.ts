export const runtime = "nodejs";
import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import type { ResultSetHeader } from "mysql2";

export async function GET() {
  try {
    // Create database connection
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    // Execute query to get all portfolio data with images
    const [rows] = await connection.execute(`
      SELECT
        p.*, 
        COALESCE(JSON_ARRAYAGG(pi.image_url), JSON_ARRAY()) AS images_json
      FROM portfolio p
      LEFT JOIN portfolio_images pi ON p.id = pi.portfolio_id
      GROUP BY p.id
      ORDER BY p.created_at DESC
    `);

    await connection.end();

    const processedData = Array.isArray(rows) ? (rows as Array<Record<string, unknown>>).map((row) => {
      const raw = row.images_json;
      const jsonString = typeof raw === 'string' ? raw : (raw instanceof Buffer ? raw.toString('utf8') : '[]');
      const imageArr = JSON.parse(jsonString).filter((img: string) => typeof img === 'string' && img.trim());
      return {
        ...row,
        images: imageArr,
      };
    }) : [];

    // Return the portfolio data
    return NextResponse.json(
      { 
        success: true, 
        data: processedData,
        count: processedData.length
      },
      { status: 200 }
    );

  } catch (error: unknown) {
    console.error('Portfolio API error:', error);
    
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch portfolio data.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// Optional: Add POST method to create new portfolio entries
export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    // Insert new portfolio entry
    const [result] = await connection.execute<ResultSetHeader>(
      `INSERT INTO portfolio (
        title, project_description, skills_deliverables, tools, category,
        store_link, client_name, client_linkedin, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`,
      [
        body.title || 'Untitled Project',
        body.project_description,
        body.skills_deliverables,
        body.tools || body.icons, // Support both field names for backward compatibility
        body.category || 'Store Development',
        body.store_link,
        body.client_name,
        body.client_linkedin
      ]
    );

    await connection.end();

    return NextResponse.json(
      { 
        success: true, 
        message: "Portfolio entry created successfully.",
        id: result.insertId
      },
      { status: 201 }
    );

  } catch (error: unknown) {
    console.error('Portfolio POST API error:', error);
    
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create portfolio entry.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
} 