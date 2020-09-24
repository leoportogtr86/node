const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
app.use(express.static('public'))
app.set('view engine', 'ejs')


io.on('connection', socket => {

    console.log(socket)
    console.log(socket.id)
})






app.get('/', (req, res) => {

    res.render('index')
})



http.listen(3000, () => {

    console.log('estamos online')
})