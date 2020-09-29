const nodemailer = require('nodemailer')
const ejs = require('ejs')


//habilitar o acesso no gmail
//https://myaccount.google.com/lesssecureapps
let transporter = nodemailer.createTransport({

    service: 'gmail',
    auth: {
        user: '',
        pass: ''
    }

})

ejs.renderFile('./index.ejs', {}, (err, html) => {

    if (err) {

        console.log(err)

    } else {


        transporter.sendMail({

            from: 'Leo Porto <leonardoreisporto@gmail.com>',
            to: 'leonardoreisporto@gmail.com',
            subject: 'Teste de e-mail com nodemailer',
            text: 'Olá, teste.',
            html: html


        }).then(data => {

            console.log(data)


        }).catch(err => {

            console.log(err)
        })


    }
})