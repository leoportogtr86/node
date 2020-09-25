const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
app.use(express.static('public'))
app.set('view engine', 'ejs')


io.on('connection', socket => {


    socket.on('msg', data => {

        console.log(data)

        //emitindo a mensagem globalmente
        //todos os clientes conectados irao receber
        io.emit('resposta', data)
    })


    //tratando a desconexao no backend
    socket.on('disconnect', () => {

        console.log('x desconectou - ' + socket.id)
    })

    socket.on('mensagem', data => {

        console.log(data)
    })


})






app.get('/', (req, res) => {

    res.render('index')
})



http.listen(3000, () => {

    console.log('estamos online')
})