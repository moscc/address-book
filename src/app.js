const storage = window.localStorage

const renderContacts = () => {
    const contacts = JSON.parse(storage.getItem('contacts'))

let div = document.querySelector('.contact-list')

if(contacts) {
  div.innerHTML = ''
  // render the Contacts
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

document.addEventListener('DOMContentLoaded', () => {
  renderContacts()

  const addContactForm = document.querySelector('.new-contact-form')
  const addContactBtn = document.querySelector('.add-contact')
  const cancelBtn = document.querySelector('.cancel')
  const saveContactBtn = document.querySelector('.save-contact')

  addContactBtn.addEventListener('click', () => {
    cancelBtn.classList.remove('hide')
    addContactForm.classList.remove('hide')
    addContactBtn.classList.add('hide')
  })
  cancelBtn.addEventListener('click', () => {
    addContactBtn.classList.remove('hide')
    addContactForm.classList.add('hide')
    cancelBtn.classList.add('hide')
  })

document.addEventListener('DOMContentLoaded', () => {
  renderContacts()
  const contactForm = document.querySelector('.new-contact-form')

  contactForm.addEventListener('submit', event => {
    event.preventDefault()
    const storage = window.localStorage

  // Reads all the input fields and get their values
  const { name, email, phone, company, notes, twitter } = contactForm.elements

  const contact = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    company: company.value,
    notes: notes.value,
    twitter: twitter.value,
  }

  console.log(contact)

  let contacts = JSON.parse(storage.getItem('contacts')) || []

  contacts.push(contact)
  // Saves input to our storage
  storage.setItem('contacts', JSON.stringify(contacts))
  renderContacts()
  resetFormField()
  })
})
})
