const express = require ('express');

// Configurando as funções do Express
const app = express();
app.set('view engine', 'ejs');

// Acessando a rota através do get
app.get('/', (req, res) => {
    // res.sendFile('./views/index.html', {root: __dirname});

    // passando parâmetro body
    const blogs = [
        {titulo: 'Rosa', conteudo: 'Rosas são vermelhas.'},
        {titulo: 'Girassol', conteudo: 'Sempre em direção ao Sol.'},
        {titulo: 'Margaridas', conteudo: 'Um tipo de flor.'},
    ];

    // Acessando a rota através do Framework ejs após instalação
    res.render('index', {titulo: 'Home', blogs}); // passando parâmetro head
});

app.get('/sobre', (req, res) => {
    // res.sendFile('./views/sobre.html', {root: __dirname});
    
    const blogs = [
        {titulo: 'Rosa', conteudo: 'Rosas são vermelhas.'},
        {titulo: 'Girassol', conteudo: 'Sempre em direção ao Sol.'},
        {titulo: 'Margaridas', conteudo: 'Um tipo de flor.'},
    ];
    
    res.render('sobre', {titulo: 'Sobre', blogs});
});

// Redirecionamento de página
app.get('/sobrenos', (req, res) => {
    res.redirect('sobre');
})

app.get('/blog/criar', (req, res) => {
    res.render('criar', {titulo: 'Criar Novo Blog'});
})

app.use((req, res) => {
    // res.status(400).sendFile('./views/404.html', {root: __dirname});
    res.status(404).render('404');
});

app.listen(3001);
