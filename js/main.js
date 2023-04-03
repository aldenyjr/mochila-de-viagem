const form = document.getElementById('novoItem')
const lista = document.getElementById('lista')
const itens = JSON.parse(localStorage.getItem('itens')) || []

// console.log(itens)

itens.forEach((el) => criarElemento(el))

form.addEventListener('submit', (evento)=> {
    evento.preventDefault();

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    criarElemento(itemAtual)

    itens.push(itemAtual)

    localStorage.setItem("itens", JSON.stringify(itens))

   

    nome.value = ''
    quantidade.value = ''
    
})

function criarElemento(item) {

    // MODELO --> <li class="item"><strong>7</strong>Camisas</li>

    // Criando um novo elemento li, e adicionando a classe CSS
    const novoItem = document.createElement('li')
    novoItem.classList.add('item')

    // Criando um novo elemento strong, e adicionando a quantidade
    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade

    // li recebe strong como filho
    novoItem.appendChild(numeroItem)

    // incrementando li com strong, mais nome
    novoItem.innerHTML += item.nome

    // adicionando li como filha da ul    
    lista.appendChild(novoItem)

   

}



let Array = [1,2,3]

for(let i = 0; i < Array.length; i++) {
    console.log(i)
}