const btn = document.querySelector('#app button')
const main = document.querySelector('#app ul')
const input = document.querySelector('#app input')

const todos = ['Fazer café', 'Estudar javascript', 'Comunidade']

function renderTodos(){

    main.innerHTML = ''

    todos.forEach(function(index, key){
        const lista = document.createElement('li')
        const texto = document.createTextNode(index)
        const linkElement = document.createElement('a')

        linkElement.setAttribute('href', '#')
        linkElement.setAttribute('onclick', `deleteTodos(${key})`)

        const linkTest = document.createTextNode(" Excluir")

        linkElement.appendChild(linkTest)
        lista.appendChild(texto)
        lista.appendChild(linkElement)
        main.appendChild(lista)
    })
}

renderTodos()


function addElement(){
    todos.push(input.value)
    input.value = ''
    renderTodos()   
}

btn.onclick = addElement

function deleteTodos(pos){
    todos.splice(pos, 1)
    renderTodos()
}