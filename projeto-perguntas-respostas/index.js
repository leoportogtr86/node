const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

//definindo qual motor de renderizacao iremos usar
app.set('view engine', 'ejs')


app.get('/', (req, res) => {

    let nome = "Leo Porto"
    let idade = 34
    let x = 1

    res.render('index', {

        nome: nome,
        idade: idade,
        numero: x
    })
})

app.get('/home', (req, res) => [

    res.render('home')
])

app.get('/lacos', (req, res) => {


    let pessoas = [

        { nome: 'Leo', idade: 34 },
        { nome: 'Davi', idade: 4 },
        { nome: 'Liz', idade: 2 },
        { nome: 'Chris', idade: 32 },
        { nome: 'Juca', idade: 3 },
        { nome: 'Lara', idade: 24 },
        { nome: 'Lua', idade: 37 },
        { nome: 'Joe', idade: 52 },
    ]


    res.render('lacos', {

        pessoas: pessoas
    })
})

app.get('/react', (req, res) => {

    res.json({ msg: "hello react" })
})



app.listen(3001, (err) => {

    if (err) {

        console.log(err)

    } else {

        console.log('online na porta 3001')
    }


})