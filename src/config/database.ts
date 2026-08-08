// Get the client
import mysql from "mysql2/promise";
// Create the connection to database
const getConnection = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "nodejsts",
    password: "duong123",
    port: 3306,
  });
  return connection;
};
export default getConnection;
