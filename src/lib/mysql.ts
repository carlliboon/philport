import mysql from "mysql2/promise";

let connection: mysql.Connection | null = null;

export async function getConnection() {
  if (!connection) {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      port: Number(process.env.DB_PORT),
    });
  }
  return connection;
}

export async function testConnection() {
  try {
    const conn = await getConnection();
    await conn.ping();
    return { success: true, message: "Database connection successful!" };
  } catch (error) {
    return {
      success: false,
      message: `Database connection failed: ${error instanceof Error ? error.message : "Unknown error"}`,
    };
  }
}

export default getConnection;
