import dotenv from "dotenv";

export default {
    schema: './src/database/schema/schema.js',
    relations: './src/database/relations/relations.js',

    out: './drizzle',
    dialect: 'mysql',
    dbCredentials: {
        host: dotenv.config().parsed.MYSQL_HOST,
        user: dotenv.config().parsed.MYSQL_USER,
        database: dotenv.config().parsed.MYSQL_DATABASE,
        password: dotenv.config().parsed.MYSQL_PASSWORD,
    }
}