const express = require('express')
const app = express()
const mongoose = require('./db/db')
const consign = require('consign')
const Musica = require('./db/models/musica')
const cors = require('cors')
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use(cors())


consign()
    .include('routes')
    .into(app)

app.listen(3000, () => {

    console.log('estamos online na porta 3000')
})