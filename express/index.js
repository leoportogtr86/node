//importando o express
const express = require('express')

//inicializando o express
const app = express()


app.get('/', (req, res)=>{


    res.send({msg: "home"})



})

app.get('/rota1', (req, res)=>{

    res.send({msg: "rota 1"})
})


app.get('/rota2', (req, res)=>{

    res.send({msg: "rota 2"})
})

app.get("/ola/:nome/:idade", (req, res)=>{

    //req => dados enviados pelo usuario
    //res resposta dada pelo servidor

    //req.params... meio de acessar os dados enviados pelo usuário

    let nome = req.params.nome
    let idade = req.params.idade

    res.send(`Olá, ${nome}, você tem ${idade} anos.`)
})



app.get('/rota3', (req, res)=>{

    res.send({msg: "rota 3"})
})







app.listen(8080, (err)=>{

    if (err){

        console.log(err)
    } else {

        console.log("servidor online")
    }
})