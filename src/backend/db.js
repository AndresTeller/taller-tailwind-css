const { createPool } = require("mysql2/promise");

const pool = createPool({
  host: "containers-us-west-195.railway.app",
  user: "root",
  password: "FpK6pnquTByNn3NNmRQD",
  port: "5943",
  database: "railway",
});

module.exports = { pool };
