module.exports = app => {

    const teste = (req, res) => {

        res.send({ msg: 'teste' })
    }

    return { teste }
}