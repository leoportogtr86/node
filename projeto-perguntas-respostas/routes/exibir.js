module.exports = app => {


    app.get('/exibir', (req, res) => {

        res.render('exibir')
    })
}