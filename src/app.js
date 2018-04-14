const storage = window.localStorage
const renderContacts = () => {
  let contacts = JSON.parse(window.localStorage.getItem('contacts'))
  let div = document.querySelector('.contact-list')
  div.innerHTML = ''

  if (contacts) {
    let ul = document.createElement('ul')

    let items = contacts.map(contact => {
      let li = document.createElement('li')
      li.innerHTML = `
        <span>${ contact.name }</span>  |
        <span>${ contact.email }</span> |
        <span>${ contact.phone }</span>
        `
        return li
    })

    items.forEach(li => ul.appendChild(li))
    div.appendChild(ul)
  } else {
    div.innerHTML = `<p>You have no contacts in your address book</p>`
  }
}


/*
const renderContacts = () => {
  let contacts = JSON.parse(window.localStorage.getItem('contacts'))
  let div = document.querySelector('.contact-list')

  if(contacts) {
    div.innerHTML = ''
    const ul = document.createElement('ul')

    contacts.forEach(contact => {
      let li = document.createElement('li')
      li.innerHTML = `
        <span>${contact.name}</span>
        <span>${contact.email}</span>
        <span>${contact.phone}</span>
        `
        ul.appendChild(li)
      })

      div.appendChild(ul)
      } else {
          div.innerHTML = '<p>You have no contacts in your address book</p>'
        }
  }
*/

document.addEventListener('DOMContentLoaded', () => {
  renderContacts()

  const addContactForm = document.querySelector('.new-contact-form')
  const addContactBtn = document.querySelector('.add-contact')
  const cancelBtn = document.querySelector('.cancel')
  const saveContactBtn = document.querySelector('.save-contact')
  let contactList = document.querySelector('.contact-list')

  addContactBtn.addEventListener('click', () => {
    cancelBtn.classList.remove('hide')
    addContactForm.classList.remove('hide')
    addContactBtn.classList.add('hide')
    contactList.classList.add('hide')
  })

  cancelBtn.addEventListener('click', () => {
    addContactBtn.classList.remove('hide')
    addContactForm.classList.add('hide')
    cancelBtn.classList.add('hide')
    contactList.classList.remove('hide')
  })

  addContactForm.addEventListener('submit', event => {
    event.preventDefault()
    const localStorage = window.localStorage

    let { name, email, phone, company, notes, twitter } = addContactForm.elements

    let contact = {
      id: Date.now(),
      name: name.value,
      email: email.value,
      phone: phone.value,
      company: company.value,
      notes: notes.value,
      twitter: twitter.value,
    }

  if (contact.name, contact.email, contact.phone) {
    console.log(`Saving the following contact: ${JSON.stringify(contact)}`)
    contacts.push(contact)
    localStorage.setItem('contacts', JSON.stringify(contacts))
    renderContacts()
  } else {
      console.log(`One or more fields are missing, please fill in all fields and try again!`)
    }
  })
})
