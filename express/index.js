//importando o express
const express = require('express')

//inicializando o express
const app = express()


app.get('/', (req, res)=>{


    res.send({msg: "estamos online"})



})








app.listen(8080, (err)=>{

    if (err){

        console.log(err)
    } else {

        console.log("servidor online")
    }
})