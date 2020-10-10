module.exports = app => {

    app.route('/user')
        .post(app.api.user.save)

    app.route('/teste')
        .get(app.api.teste.teste)

}