const { createPool } = require("mysql2/promise");

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "123456789",
  port: "3306",
  database: "desarrollo_web",
});

module.exports = { pool };
