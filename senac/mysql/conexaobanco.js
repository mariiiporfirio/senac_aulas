//Chamando a biblioteca mysql
var mysql = require("mysql");
 
//Conectando meu banco de dados
var conecteBanco = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "escola"
});

// Exportando módulo
module.exports = conecteBanco;