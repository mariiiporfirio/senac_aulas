const express = require ('express');

// Configurando as funções do Express
const app = express();
app.set('view engine', 'ejs');

app.listen(3001);

// Acessando a rota através do get
app.get('/', (req, res) => {
    // res.sendFile('./views/index.html', {root: __dirname});
    res.render('index');
});

app.get('/sobre', (req, res) => {
    // res.sendFile('./views/sobre.html', {root: __dirname});
    res.render('sobre');
});

// Redirecionamento de página
app.get('/sobrenos', (req, res) => {
    res.redirect('sobre');
})


app.use((req, res) => {
    // res.status(400).sendFile('./views/404.html', {root: __dirname});
    // Acessando a rota através do Framework ejs após instalação
    res.status(404).render('404');
});