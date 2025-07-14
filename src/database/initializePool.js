import mysql from "mysql2/promise";
import dotenv from "dotenv";
import {drizzle} from "drizzle-orm/mysql2";

export const pool = mysql.createPool({
    host: dotenv.config().parsed.MYSQL_HOST,
    user: dotenv.config().parsed.MYSQL_USER,
    database: dotenv.config().parsed.MYSQL_DATABASE,
    password: dotenv.config().parsed.MYSQL_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export const db = drizzle({client: pool});