const mongoose = require('../db/db')
const Musica = require('../db/models/musica')

module.exports = app => {

    app.get('/visualizar', (req, res) => {

        Musica.find({}, (err, docs) => {

            res.send(docs)

        })
    })
}