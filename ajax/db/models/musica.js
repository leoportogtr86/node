const mongoose = require('../db')


let Musica = mongoose.model('musica', {

    titulo: String,
    artista: String
})

module.exports = Musica