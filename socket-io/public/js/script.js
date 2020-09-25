console.log('hello world')

let socket = io('http://localhost:3000/')

socket.emit('mensagem', "Olá, estamos conectados")

//criando evento de desconexao

socket.on('disconnect', () => {

    console.log('desconectado')
})