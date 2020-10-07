const sequelize = require('sequelize')
const { Sequelize } = require('sequelize')


//nome do banco, user e senha
const con = new Sequelize('guia_perguntas', 'root', '151187', {

    host: 'localhost',
    dialect: 'mysql'
})

module.exports = con