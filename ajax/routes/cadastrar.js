const mongoose = require('../db/db')
const Musica = require('../db/models/musica')

module.exports = app => {

    app.post('/cadastrar', (req, res) => {

        const musica = new Musica({

            titulo: req.body.titulo,
            artista: req.body.artista
        })

        musica.save().then((res) => {

            console.log('dados salvos')

        }).catch((err) => {


            console.log(err)

        })

        res.send('dados salvos')
    })
}