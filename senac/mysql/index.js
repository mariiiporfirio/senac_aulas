// //Chamando a biblioteca mysql
// var mysql = require("mysql");
 
// //Conectando meu banco de dados
// var conecteBanco = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "escola"
// });

// conecteBanco.connect(function(error){
//     if(error) throw error;
//     // console.log("O banco de dados foi conectado!");

//     conecteBanco.query("select * from estudante", function(error, result) {
//         if(error) throw error;
//         console.log(result); // a execução sendo positiva, imprime todos os dados da tabala estudante
//         console.log(result[0]); // apenas os dados da primeira posição
//         console.log(result[0].nomecompleto); // escolhendo dados especificos dentro de uma posição
//     });
// });

// var conexao = require("./conexaobanco");

// conexao.connect(function(error){
//     if(error) throw error;
//     // console.log("O banco de dados foi conectado!");

//     conexao.query("select * from estudante", function(error, result) {
//         if(error) throw error;
//         console.log(result); // a execução sendo positiva, imprime todos os dados da tabala estudante
//         console.log(result[0]); // apenas os dados da primeira posição
//         console.log(result[0].nomecompleto); // escolhendo dados especificos dentro de uma posição
//     });
// });

var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());// transforma os dados do input para o json (transforma em objetos)

app.use(bodyParser.urlencoded({extended:true}));// processa os dados que foram recebidos

app.get('/', function(req, res) {
    res.sendFile(__dirname+'/cadastro.html');
});

app.listen(7000);