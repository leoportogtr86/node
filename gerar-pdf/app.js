//importacao da lib
const pdf = require('html-pdf')


//texto a ser escrito          caminho onde sera salvo   callback
pdf.create('Hello Html-Pdf', {}).toFile('./data/meupdf.pdf', (err, res) => {

    if (err) {

        console.log(err)


    } else {

        console.log(res)
        console.log('pdf gerado')
    }
})