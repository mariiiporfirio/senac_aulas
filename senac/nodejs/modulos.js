// // Importanto os dados do arquivo Pessoas
const executandoPessoas = require('./pessoas');

// // Executando todo o arquivo importado
console.log(executandoPessoas);
// // Executanto um item específico do arquivo importado
console.log(executandoPessoas.idade);

// Desestruturação
const {pessoas, idade} = require ('./pessoas');
console.log(pessoas, idade);

// Descobrindo informações sobre o sistema operacional
const sistemaOperacional = require('os');
// console.log(sistemaOperacional);
console.log(sistemaOperacional.platform(), sistemaOperacional.homedir());
