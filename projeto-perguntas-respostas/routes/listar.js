const Pergunta = require('../database/models/pergunta')

module.exports = app => {

    app.get('/lista', (req, res) => {

        Pergunta.findAll({
            raw: true, order: [

                ['id', 'DESC'] //ASC => crescente

            ]
        }).then((data) => {

            res.send(data)


        })
    })

}