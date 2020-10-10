const express = require('express')
const app = express()

const consign = require('consign')

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