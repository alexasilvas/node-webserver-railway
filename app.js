require('dotenv').config(); // para mandar a llamar .env
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT; // mandar a llamar el puerto de .env

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'Alexandra Silva',
        titulo: 'Curso de node '
    });
});

app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: 'Alexandra Silva',
        titulo: 'Curso de node '
    });
})

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre: 'Alexandra Silva',
        titulo: 'Curso de node '
    });
})

// comodin para que cualquier otra ruta que no sea especificada mande error
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log( `Example app listening at http://localhost:${port}`)
})