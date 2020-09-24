console.log('hello world')

let socket = io('http://localhost:3000/')

socket.emit('mensagem', { msg: "olá pessoal" })



let texto = document.getElementById('texto')
let btn = document.getElementById('btn')

btn.onclick = function() {

    console.log(texto.value)
    socket.emit('input', texto.value)

}