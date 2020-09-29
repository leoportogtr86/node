//importacao da lib
const pdf = require('html-pdf')
const ejs = require('ejs')


//variaveis que usaremos para passar para dentro do ejs
let nome = 'Leo Porto'
let idade = 34
let profissao = 'Desenvolvedor e Guitarrista'


//renderizando o ejs com as variaveis
ejs.renderFile('./views/index.ejs', { nome: nome, idade: idade, profissao: profissao }, (err, html) => {

    if (err) {

        console.log(err)

    } else {

        //texto a ser escrito          caminho onde sera salvo   callback
        pdf.create(html, {}).toFile('./data/meupdf.pdf', (err, res) => {

            if (err) {

                console.log(err)


            } else {

                console.log(res)
                console.log('pdf gerado')
            }
        })
    }
})