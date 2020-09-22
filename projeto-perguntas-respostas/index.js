const express = require('express')
const app = express()
const cors = require('cors')
const consign = require('consign')
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