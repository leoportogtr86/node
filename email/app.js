const nodemailer = require('nodemailer')


//habilitar o acesso no gmail
//https://myaccount.google.com/lesssecureapps
let transporter = nodemailer.createTransport({

    service: 'gmail',
    auth: {
        user: 'leonardoreisporto@gmail.com',
        pass: 'lizmalina2018'
    }

})

transporter.sendMail({

    from: 'Leo Porto <leonardoreisporto@gmail.com>',
    to: 'leonardoreisporto@gmail.com',
    subject: 'Teste de e-mail com nodemailer',
    text: 'Olá, teste.',
    html: `<!doctype html>
    <html lang="en">
    
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <style>
            body {
                background-color: #222;
                color: red;
            }
        </style>
        <title>Hello, world!</title>
    </head>
    
    <body>
    
        <div style="background-color: rgb(51, 59, 59);">
    
            <h1 style="color: red;">Hello, world!</h1>
            <h2 style="color: blue;">Subtítulo Azul</h2>
            <p style="color: greenyellow;">Aqui um corpo de um texto qualquer na cor verde.</p>
            <img src="https://img.olx.com.br/images/48/489918112740292.jpg" style="border-radius: 10px;" alt="">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/-_lc4yua9b0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    
        <iframe src="https://fretmap.app/" width="100%" height="375" />
    
    
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </body>
    
    </html>`


}).then(data => {

    console.log(data)


}).catch(err => {

    console.log(err)
})