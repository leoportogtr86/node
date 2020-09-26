const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get('/', (req, res) => {

    console.log('hello multer')
})



app.listen(3000, () => {

    console.log('servidor rodando')
})