console.log('hello world')

let socket = io('http://localhost:3000/')

socket.emit('mensagem', "Olá, estamos conectados")


let msgField = document.getElementById('msg')
let userField = document.getElementById('user')
let btnEnviar = document.getElementById('enviar')



socket.on('resposta', data => {

    let chat = document.getElementById('chat')
    let p = document.createElement('p')
    console.log(data)
    p.innerHTML = data.user + ' : ' + data.msg
    chat.append(p)





})


btnEnviar.onclick = function() {

    let msg = msgField.value
    let user = userField.value

    socket.emit('msg', {

        msg: msg,
        user: user
    })

    console.log(msg)
    console.log(user)

}




//criando evento de desconexao

socket.on('disconnect', () => {

    console.log('desconectado')
})