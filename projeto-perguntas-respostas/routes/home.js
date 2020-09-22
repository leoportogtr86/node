module.export = app => {


    app.get('/home', (req, res) => [

        res.render('home')
    ])

}