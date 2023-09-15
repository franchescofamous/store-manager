const mysql2 = require("mysql2");
require("dotenv").config();
const dataBase = mysql2.createConnection({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
dataBase.connect((error) => {
  if (error) {
    throw error;
  }
  console.log("dataBase connect successfully");
});
module.exports = dataBase;
