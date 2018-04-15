const renderContacts = () => {
  let contacts = JSON.parse(window.localStorage.getItem('contacts'))
  let div = document.querySelector('.contact-list')

  if(contacts) {
    div.innerHTML = ''
    const ul = document.createElement('ul')

    contacts.forEach(contact => {
      let li = document.createElement('li')
      li.innerHTML = `
        <span>${contact.id}</span> |
        <span>${contact.name}</span> |
        <span>${contact.email}</span> |
        <span>${contact.phone}</span>
        `
        ul.appendChild(li)
      })

      div.appendChild(ul)
      } else {
          div.innerHTML = '<p>You have no contacts in your address book <br>Let\'s add some!</br></p>'
        }
  }

document.addEventListener('DOMContentLoaded', () => {
  renderContacts()

  const addContactForm = document.querySelector('.new-contact-form')
  const addContactBtn = document.querySelector('.add-contact')
  const cancelBtn = document.querySelector('.cancel')
  const saveContactBtn = document.querySelector('.save-contact')
  const contactTable = document.querySelector('.contacts-table')
  let contactList = document.querySelector('.contact-list')

  addContactBtn.addEventListener('click', () => {
    cancelBtn.classList.remove('hide')
    addContactForm.classList.remove('hide')
    addContactBtn.classList.add('hide')
    contactList.classList.add('hide')
    contactTable.classList.add('hide')
  })

  cancelBtn.addEventListener('click', () => {
    addContactBtn.classList.remove('hide')
    addContactForm.classList.add('hide')
    cancelBtn.classList.add('hide')
    contactList.classList.remove('hide')
    contactTable.classList.remove('hide')
  })

  addContactForm.addEventListener('submit', event => {
    event.preventDefault()
    const localStorage = window.localStorage

    let { name, email, phone, company, twitter } = addContactForm.elements

    let contact = {
      id: Date.now(),
      name: name.value,
      email: email.value,
      phone: phone.value,
      company: company.value,
      twitter: twitter.value,
    }

    addContactForm.reset()

  if (contact.name, contact.email, contact.phone) {
    document.getElementById("message").innerHTML = "Contact successfully saved!"
    const contacts = JSON.parse(localStorage.getItem('contacts')) || []
    contacts.push(contact)
    localStorage.setItem('contacts', JSON.stringify(contacts))
    renderContacts()
  } else {
      document.getElementById("message").innerHTML = "One or more fields are missing, please fill in all fields to save a contact!"
    }
  })
})
