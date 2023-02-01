const form = document.querySelector('form')
const inputName = document.querySelector('.input-name')
const inputPhone = document.querySelector('.input-phone')
const tbody = document.querySelector('tbody')
const button = document.querySelector('.button')

let lines = ''

function maskPhone() {

    if (inputPhone.value.length == 2) {
        inputPhone.value += ' '
    }
    if (inputPhone.value.length == 8) {
        inputPhone.value += '-'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
   
   test()
   clearInput()
  
})

function test () {
    let listOfContacts = [ ]

    listOfContacts.push({inputName: inputName.value, inputPhone: inputPhone.value})

    for(let i = 0; i < listOfContacts.length; i++) {

        let tr = tbody.insertRow() // inserindo nova linha
    
        let tdName = tr.insertCell() //inserindo nome em um td
        let tdPhones = tr.insertCell() // inserindo telefone em um td
    
        tdName.innerText = listOfContacts[i].inputName // inserindo valor dd nome
        tdPhones.innerText = listOfContacts[i].inputPhone // inserindo valor do telefone

        saveContacts()

    }
   
}

// limpar input e volta o foco nela
function clearInput(){
    inputName.value = ''
    inputPhone.value = ''
    inputName.focus()
}

function saveContacts() {
    
    let listOfContacts = []

    // verificando se existe algo salvo no locastorage
    if(localStorage.hasOwnProperty('contacts')) {
        listOfContacts = JSON.parse(localStorage.getItem('contacts'))
    }
    // salvando contatos em um obj
    listOfContacts.push({inputName: inputName.value, inputPhone: inputPhone.value})

    const contactsJSON = JSON.stringify(listOfContacts) // transformando em json no formato string
    localStorage.setItem('contacts', contactsJSON) // salvando contatos no storage do navegador

}

function addContactsSave (){
    const contact = localStorage.getItem('contacts') //pegando contatos do storage

    const listOfContacts = JSON.parse(contact) // tranformando em array novamente
   
   for(let i = 0; i < listOfContacts.length; i++) {

    let tr = tbody.insertRow() // inserindo nova linha

    let tdName = tr.insertCell() //inserindo nome em um td
    let tdPhones = tr.insertCell() // inserindo telefone em um td
    
    tdName.innerText = listOfContacts[i].inputName // inserindo valor dd nome
    tdPhones.innerText = listOfContacts[i].inputPhone // inserindo valor do telefone
  }
}
addContactsSave()

