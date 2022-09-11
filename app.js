const express = require('express')
const app = express()
const ejs = require('ejs')
const port = 8080

// EJS
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

// Carpetas Static
app.use(express.static(__dirname + '/public'))


// Rutas
app.listen(port, () => {
    console.log('Esta funcionando en el puerto: ' + port)
})

app.get('/', (req, res) => {
    res.render("index")
})

app.get('/registro', (req, res) => {
    res.render("login")

}) 
/*
app.get('/noticias', (req, res) => {
})

app.get('/comunidad', (req, res) => {
})

*/


