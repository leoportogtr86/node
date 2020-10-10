module.exports = app => {

    const save = (req, res) => {

        res.send({ msg: 'user save' })
    }

    return { save }
}