require("dotenv").config();

const PORT = process.env.PORT || 5000,
  DB_HOST = process.env.DB_HOST || "localhost",
  DB_USER = process.env.DB_USER || "root",
  DB_PASSWORD = process.env.DB_PASSWORD || "123456789",
  DB_PORT = process.env.DB_PORT || 3306,
  DB_NAME = process.env.DB_NAME || "desarrollo_web";

module.exports = {
  PORT,
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USER
}