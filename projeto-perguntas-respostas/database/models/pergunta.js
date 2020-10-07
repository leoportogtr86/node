const sequelize = require('sequelize')
const con = require('../database')


//definindo uma tabela (model) nome da tabela
const Pergunta = con.define('pergunta', {

    //atributos da tabela

    titulo: {

        type: sequelize.STRING,
        //impede que tenha informacoes vazias no banco
        allowNull: false
    },

    descricao:{

        type: sequelize.TEXT,
        allowNull: false

    }
})


//caso a tabela ja exista, ele nao ira forçar a recriacao
Pergunta.sync({force: false}).then(()=>{

    console.log('Tabela criada')
})