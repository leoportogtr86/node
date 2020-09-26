const express = require('express')
const app = express()
const multer = require('multer')

app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get('/', (req, res) => {

    res.render('index')
})

app.post('/upload', (req, res) => {

    res.send('Arquivo enviado!')
})



app.listen(3000, () => {

    console.log('servidor rodando')
})