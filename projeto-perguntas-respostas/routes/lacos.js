module.exports = app => {


    app.get('/lacos', (req, res) => {


        let pessoas = [

            { nome: 'Leo', idade: 34 },
            { nome: 'Davi', idade: 4 },
            { nome: 'Liz', idade: 2 },
            { nome: 'Chris', idade: 32 },
            { nome: 'Juca', idade: 3 },
            { nome: 'Lara', idade: 24 },
            { nome: 'Lua', idade: 37 },
            { nome: 'Joe', idade: 52 },
        ]


        res.render('lacos', {

            pessoas: pessoas
        })
    })

}