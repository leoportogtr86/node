//importacao da lib
const pdf = require('html-pdf')
const ejs = require('ejs')

let html = `<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <style>
        img {
            width: 300px;
        }
    </style>
    <title>Hello, world!</title>
</head>

<body>
    <h1 class="text-danger">Hello, HTML-PDF!</h1>
    <p>Aqui temos um texto em html com bootstrap que será escrito num pdf.</p>
    <h2 class="text-primary">Ferrari F-40</h2>
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/F40_Ferrari_20090509.jpg" alt="">

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>

</html>`


//texto a ser escrito          caminho onde sera salvo   callback
pdf.create(html, {}).toFile('./data/meupdf.pdf', (err, res) => {

    if (err) {

        console.log(err)


    } else {

        console.log(res)
        console.log('pdf gerado')
    }
})