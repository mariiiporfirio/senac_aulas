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

//importando módulo do banco de dados
var conexao = require("./conexaobanco");
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());// transforma os dados do input para o json (transforma em objetos)

app.use(bodyParser.urlencoded({extended:true}));// processa os dados que foram recebidos

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.sendFile(__dirname+'/cadastro.html');
});

app.post('/', function(req, res) {
    var nomecompleto = req.body.nomecompleto;
    var email = req.body.email;
    var senha = req.body.senha;

    conexao.connect(function(error) {
        if(error) throw error;

    //         var sql = "INSERT INTO estudante (nomecompleto, email, senha) VALUES('"+nomecompleto+" ',' "+email+" ',' "+senha+"')";

    // conexao.query(sql, function(error, result) {
    //     if(error) throw error;
    //         res.send("Estudante cadastrado com sucesso!" +result.insertId);
    //     });

    //Previnindo SQL Injection
    var sql = "INSERT INTO estudante (nomecompleto, email, senha) VALUES (?, ?, ?)";

    conexao.query(sql, [nomecompleto, email, senha], function(error, result) {
        if(error) throw error;
        // res.send("Estudante cadastrado com sucesso!" +result.insertId);
        res.redirect('/estudantes');
    });
   
    });
});

app.get('/estudantes', function(req, res){
    conexao.connect(function(error){
        if (error) console.log(error);
 
        var sql = "select * from estudante";
        conexao.query(sql, function(error, result){
            if(error) console.log(error);
            // console.log(result); mostra no terminal o select feito

            res.render("estudantes", {estudante:result});
        })
    })
})
 
app.listen(7070);