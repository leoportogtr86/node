const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
app.use(express.static('public'))
app.set('view engine', 'ejs')


io.on('connection', socket => {


    //tratando a desconexao no backend
    socket.on('disconnect', () => {

        console.log('x desconectou - ' + socket.id)
    })

    socket.on('mensagem', data => {

        console.log(data)
    })

    socket.on('texto', data => {

        console.log(data)
    })

    socket.on('input', data => {

        console.log(data)
        socket.emit('resposta', data + ' - resposta do backend')

    })

    socket.on('mensagem2', data => {

        socket.emit('resposta2', data + ' - resposta 2')
    })


})






app.get('/', (req, res) => {

    res.render('index')
})



http.listen(3000, () => {

    console.log('estamos online')
})