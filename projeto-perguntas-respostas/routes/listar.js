const Pergunta = require('../database/models/pergunta')

module.exports = app => {

    app.get('/lista', (req, res)=>{

       Pergunta.findAll().then((data)=>{

        res.send(data)

           
       })
    })

}