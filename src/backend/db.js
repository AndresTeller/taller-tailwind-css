const { createPool } = require("mysql2/promise");

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "123456789",
  port: "3306",
  database: "desarrollo_web",
});

module.exports = { pool };

/*
  host: "containers-us-west-195.railway.app",
  user: "root",
  password: "FpK6pnquTByNn3NNmRQD",
  port: "5943",
  database: "railway",
*/