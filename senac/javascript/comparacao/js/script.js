// Comparação
const numeroA = 2;
const numeroB = 8;
console.log(numeroA < numeroB);
console.log(numeroA > numeroB);

const numeroC = 20;
const numeroD = 20;
console.log(numeroC >= numeroD);
console.log(numeroC <= numeroD);

// Comparação com igualdade
const a = 2;
const b = 2;
console.log(a === b); //valor e tipo

// Comparação com igualdade ampla
const c = 10;
const d = "10";
console.log(c === d); //valor e converte a string para valor inteiro

// Diferenciação estrita
const e = 3;
const f = 4;
console.log(e !== f);

// Diferenciação Ampla
const g = 1;
const h = "1"; //converte para inteiro
console.log(g != h); //1 é diferente de 1

// Empty Value
let x;
let y = null;
let z ="";
console.log(x);
console.log(y);
console.log(z);