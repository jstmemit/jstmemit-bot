import mysql from "mysql2/promise";
import dotenv from "dotenv";

export const pool = mysql.createPool({
    host: dotenv.config().parsed.MYSQL_HOST,
    user: dotenv.config().parsed.MYSQL_USER,
    database: dotenv.config().parsed.MYSQL_DATABASE,
    password: dotenv.config().parsed.MYSQL_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});