// Giordano Calizaya Lab 04
const express = require('express');  
const app = express();              
const http = require('http');        
const server = http.createServer(app) 
const { Server, Socket } = require('socket.io')  
const io = new Server(server)       
const path = require('path');   
var publicPath = path.resolve(__dirname, 'cliente'); 
app.use(express.static(publicPath));


io.on('connection', (socket) => {
    socket.on('chat', (msg) => {
        io.emit('chat', msg)
    })
})


app.get('/', (req, res) => {                    
    res.sendFile(path.resolve(__dirname + '/cliente/index.html')) 
})

server.listen(3000, () => {                           
    console.log('Servidor corriendo y funcionando');
})


