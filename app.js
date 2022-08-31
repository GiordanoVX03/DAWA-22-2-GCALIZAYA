const express = require('express')
const app = express()
const port = 8080
const path = require('path');
var publicPath = path.resolve(__dirname, 'public'); 

app.use(express.static(publicPath));

app.listen(port, () => {
    console.log('Esta funcionando en el puerto: ' + port)
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/public/index.html'))
})

app.get('/noticias', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/public/pages/news.html'))
})

app.get('/comunidad', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/public/pages/community.html'))
})

app.get('/registro', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/public/pages/login.html'))
})


