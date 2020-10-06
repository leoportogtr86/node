module.exports = app => {

    app.post('/enviada', (req, res) => {

        res.send('Pergunta enviada.')

        console.log(req.body.titulo)
        console.log(req.body.pergunta)
    })
}