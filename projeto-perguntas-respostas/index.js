const express = require('express')
const app = express()

//definindo qual motor de renderizacao iremos usar
app.set('view engine', 'ejs')


app.get('/', (req, res)=>{

    let nome = "Leo Porto"
    let idade = 34

    res.render('index', {

        nome: nome,
        idade: idade
    })
})

app.get('/home', (req, res)=>[

    res.render('home')
])



app.listen (3000, (err)=>{

    if (err){

        console.log(err)
    
    } else {

        console.log('online na porta 3000')
    }


})