//comentário de uma linha

/* comentário 
de várias
linhas */

//exibindo um número na tela
console.log(2);

//exibindo o tipo de dado na tela
console.log(typeof 2.5);

//declarando constante e imprimindo
const meunumero = 10;
console.log(meunumero);

//erro alterar a constante
const numero = 5;

numero = 3;
console.log(numero);

// Srting utilizando aspas simples e aspas duplas
console.log('Estou aprendendo Javascrip');
console.log("Continue a aprendizagem");

// Contagem de Strings
const nome = "Calos Cunha";
console.log(nome.length);

// String de números
const valores = "589";
console.log(valores);
console.log(typeof valores);

// Pular uma linha da String
console.log("Vou pular a linha \n R$ 50,00");

// Espaçamento na String
console.log("Espaçamento \tna String")

// Veriáveis VAR (escopo global) e LET (escopo local)
var numero1 = 5;
numero1 = 3;
console.log(numero1);

let numero2 = 10;
numero2 = 3;
console.log(numero2);

// Interpolação
const sobrenome = "Cunha";
console.log(`Olá, ${sobrenome}.`);

const idade = 34;
console.log(`Sua idade é ${idade}.`);

console.log(`Seu sobrenome é ${sobrenome}, e sua idade é ${idade}.`)