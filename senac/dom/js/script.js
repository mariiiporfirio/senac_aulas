//DOM movimentando-se nele
//console.log(document.body);

console.log(document.body.childNodes);

console.log(document.body.childNodes[1].childNodes);

//propriedade para acessar o elemento do título
console.log(document.body.childNodes[1].childNodes[1].textContent);

console.log(document.body.childNodes[5].childNodes[1].textContent);

//para corrigir o retorno dos filhos do nó, sem os espaços em branco do texto
//utilize a linha de comando abaixo
//dessa forma Header estará na posição 0, main na posição 1 e footer na 2
console.log(document.body.children);

//alterando para children, agora ele 
//mostra o conteúdo do texto do footer na posição real que é a posição 2
console.log(document.body.children[2].childNodes[1].textContent);

//selecionando por tags
const listadeItens = document.getElementsByTagName("li");

console.log(listadeItens);

//selecionando elemento por id
const titulo = document.getElementById("titulo");
console.log(titulo);

//selecionando elementos por classe
const produtos = document.getElementsByClassName("produtos");
console.log(produtos);

//insertBefore
const paragrafo = document.createElement("p");
const header = titulo.parentElement;
header.insertBefore(paragrafo, titulo);

//appendChild
const navLinks = document.querySelector("nav ul");
const li = document.createElement("li");
navLinks.appendChild(li);

//replaceChild
const h2 = document.createElement("h2");
h2.textContent = "Novo Título";
header.replaceChild(h2, titulo);

//criando um nó de texto
const meuTexto = document.createTextNode("Inserindo outro título");
console.log(meuTexto);

const h3 = document.createElement("h3");
h3.appendChild(meuTexto);
console.log(h3);

//setAttribute e getAttribute
const primeiroLink = navLinks.querySelector("a");
console.log(primeiroLink);

primeiroLink.setAttribute("href", "https://www.uol.com.br/");

//pegando o link alterado
console.log(primeiroLink.getAttribute("href"));

//abrir em uma nova aba
primeiroLink.setAttribute("target", "_blank");

//altura e largura
const footer = document.querySelector("footer");
console.log(footer.offsetWidth);
console.log(footer.offsetHeight);
console.log(footer.clientWidth);
console.log(footer.clientHeight);


//getBoudingClientRect
const produtos1 = produtos[0];
console.log(produtos1.getBoundingClientRect());

//css com js
const mainCss = document.getElementById("main-container");
mainCss.style.color = "red";
mainCss.style.backgroundColor = "#000";
mainCss.style.paddingBottom = "100px";

//HTML Collection
//fazendo um loop no li e alterando a cor de fundo

for(const li of listadeItens){
    li.style.backgroundColor = "yellow";
}
