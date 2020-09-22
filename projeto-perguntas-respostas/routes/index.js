module.exports = app => {


    app.get('/', (req, res) => {

        let nome = "Leo Porto"
        let idade = 34
        let x = 1

        res.render('index', {

            nome: nome,
            idade: idade,
            numero: x
        })
    })

}