import mysql2 from "mysql2";

const pool = mysql2.createPool({
  host: "us-cdbr-east-04.cleardb.com",
  user: "bc92eed9fd020a",
  password: "0ce35883", 
  database: "heroku_5cc4543f4cb70f3",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});


export default pool.promise();