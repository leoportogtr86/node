const express = require('express')
const app = express()
const db = require('./config/db')

const consign = require('consign')

app.db = db

consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)





app.get('/', (req, res) => {

    res.send({ msg: 'backend no ar.' })


})


app.listen(3001, () => {

    console.log('backend no ar na porta 3001')
})