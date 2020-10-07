const express = require('express')
const app = express()
const cors = require('cors')
const consign = require('consign')
const bodyParser = require('body-parser')
const con = require('./database/database')


//teste de conexao 
con.authenticate().then(()=>{

    console.log('conectado ao mysql')

}).catch((err)=>{

    console.log(`Erro: ${err}`)
})

//config do body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

//definindo qual motor de renderizacao iremos usar
app.set('view engine', 'ejs')
app.use(express.static('public'))

consign()

    .include('routes')
    .into(app)




app.listen(3001, (err) => {

    if (err) {

        console.log(err)

    } else {

        console.log('online na porta 3001')
    }


})