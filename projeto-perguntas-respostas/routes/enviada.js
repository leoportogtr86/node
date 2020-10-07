const Pergunta = require('../database/models/pergunta')

module.exports = app => {

    app.post('/enviada', (req, res) => {

        

        console.log(req.body.titulo)
        console.log(req.body.pergunta)

        Pergunta.create({

            titulo: req.body.titulo,
            descricao: req.body.descricao

        }).then(()=>{

            console.log('pergunta salva')
            res.redirect('/')


        })
    })
}