import mysql from "mysql2/promise";

const connection = mysql.createPool({
  host: "localhost", // ou o IP do servidor
  user: "root", // ou o usuário configurado
  database: "login", // o nome do banco de dados
});

export default connection;
