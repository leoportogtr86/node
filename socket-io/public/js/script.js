console.log('hello world')

let socket = io('http://localhost:3000/')

socket.emit('mensagem', "Olá, estamos conectados")

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

let botao2 = document.getElementById('botao2')
let msg2 = document.getElementById('msg2')
let texto2 = document.getElementById('texto2')

botao2.onclick = () => {

    socket.emit('mensagem2', msg2.value)
}
socket.on('resposta2', socket => {

    console.log(socket)
    texto2.innerHTML = socket
})


//criando evento de desconexao

socket.on('disconnect', () => {

    console.log('desconectado')
})