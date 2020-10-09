const express = require('express')

const app = express()

app.get('/', (req, res) => {

    res.send({ msg: 'backend no ar.' })


})


app.listen(3000, () => {

    console.log('backend no ar na porta 3000')
})