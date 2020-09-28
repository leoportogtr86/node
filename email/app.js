const nodemailer = require('nodemailer')


//habilitar o acesso no gmail
//https://myaccount.google.com/lesssecureapps
let transporter = nodemailer.createTransport({

    service: 'gmail',
    auth: {
        user: 'email',
        pass: 'senha'
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
        <h1 class="text-center text-danger">Hello, world!</h1>
    
        <div class="container-fluid">
    
            <div class="row">
                <div class="col">
                    <p>Lorem ipsum dolor sit amet . Os operadores gráficos e tipográficos sabem disso bem, na realidade, todas as profissões que lidam com o universo da comunicação têm um relacionamento estável com essas palavras, mas o que é? Lorem ipsum é
                        um texto fofo sem qualquer sentido. É uma seqüência de palavras latinas que, como estão posicionadas, não formem frases com um sentido completo, mas dão vida a um texto de teste útil para preencher espaços que irão Posteriormente serão
                        ocupados a partir de textos ad hoc compostos por profissionais de comunicação. É certamente o texto de marcador de posição mais famoso , mesmo que existam diferentes versões distinguíveis da ordem em que as palavras latinas são repetidas.
                        Lorem ipsum contém as tipos de letra mais em uso, um aspecto que permite que você tenha uma visão geral da renderização do texto em termos de escolha da fonte e tamanho da fonte . Ao se referir a Lorem ipsum, diferentes expressões
                        são usadas, nomeadamente texto de preenchimento , texto fictício , texto cego ou texto do espaço reservado: em suma, seu significado também pode ser zero, mas sua utilidade é tão clara quanto ao longo dos séculos e resiste às versões
                        irônicas e modernas que vieram com a chegada da web.</p>
                </div>
            </div>
    
        </div>
    
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