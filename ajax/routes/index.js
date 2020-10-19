module.exports = app => {


    app.get('/', (req, res) => {

        res.send({ msg: 'Api no ar!' })


    })
}