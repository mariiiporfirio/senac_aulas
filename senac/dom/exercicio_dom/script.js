
// No trecho acima inserimos uma nova lista, agora você precisa inserir um texto para essa nova lista que vai se chamar Blog.
const blog = document.createTextNode("Blog");
const h3 = document.createElement("h3");
h3.appendChild(blog);
console.log(h3);

// No trecho acima criamos um novo nó de título h3, preciso que ele seja inserido no HTML embaixo do título Novo título.
const blogPai = nav.parentElement;
blogPai.insertBefore(h3, nav);
