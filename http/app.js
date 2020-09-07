const http = require('http')


//criando um servidor http
http.createServer((req, res)=>{

    res.end("<h1>Estamos online</h1>")

    
}).listen(3000)

console.log("servidor online")