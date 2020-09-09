const express = require('express')
const app = express()

//definindo qual motor de renderizacao iremos usar
app.set('view engine', 'ejs')


app.get('/', (req, res)=>{

    res.render('index')
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