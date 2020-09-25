console.log('hello world')

let socket = io('http://localhost:3000/')

socket.emit('mensagem', { msg: "olá pessoal" })

let resposta = document.getElementById('resposta')

let texto = document.getElementById('texto')
let btn = document.getElementById('btn')

btn.onclick = function() {

    console.log(texto.value)
    socket.emit('input', texto.value)

}

socket.on('resposta', socket => {

    console.log(socket)
    resposta.innerHTML = socket
})