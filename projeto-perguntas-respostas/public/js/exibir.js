console.log('hello node')

let lista = document.getElementById('lista')

axios.get('http://localhost:3001/lista').then((res) => {

    console.log(res.data)

    let dados = res.data

    dados.forEach(e => {

        let item = document.createElement('div')
        item.innerHTML = ` <div class="card m-5">
        <div class="card-title">

        <h2 class="text-center text-danger bg-light">${e.titulo}</h2>

        </div>
        <div class="card-body bg-dark">

        <p class="text-light">${e.descricao}</p>

        <button  class="btn"><a href="http://localhost:3001/perguntar">Responder</a></button>
            
        </div>
    </div>`

        lista.appendChild(item)

    });




})