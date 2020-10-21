console.log('hello node')

let lista = document.getElementById('lista')

axios.get('http://localhost:3001/lista').then((res) => {

    console.log(res.data)

    let dados = res.data

    dados.forEach(element => {

        let item = document.createElement('li')
        item.innerHTML = `Título: ${element.id} - Descrição: ${element.titulo}`

        lista.appendChild(item)

    });




})