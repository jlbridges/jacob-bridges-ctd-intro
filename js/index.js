

/*Add a footer element*/
let body = document.querySelector('body')
body.appendChild(document.createElement('footer'))

/*Insert Copyright Text in Footer*/
let today = new Date()
let thisYear = today.getFullYear()

let footer = document.querySelector('footer')
let copyright = document.createElement('p')
copyright.innerHTML = `Jacob Bridges ${thisYear}`
footer.appendChild(copyright)

/*Create List of Skills*/

let skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"]

let skillsSection = document.getElementById('skills')
let skillsList = skillsSection.querySelector('ul')
for (let i = 0; i < skills.length; i++) {
    console.log(skills[i])
    let skill = document.createElement('li')
    skill.innerHTML = skills[i]
    skillsList.appendChild(skill)

}

let messageForm = document.forms['leave_message']
messageForm.addEventListener("submit", (event) => {
    event.preventDefault()
    let name = event.target.usersName.value
    let email = event.target.usersEmail.value
    let message = event.target.usersMessage.value
    console.log(name, email, message)

    let messageSection = document.getElementById('messages')
    let messageList = messageSection.querySelector('ul')
    let newMessage = document.createElement('li')

    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a>
    <span>${message}</span>`

    let removeButton = document.createElement('button')
    removeButton.innerText = 'remove'
    removeButton.type = 'button'
    removeButton.addEventListener('click', (e) => {
        let entry = e.target.parentNode
        entry.remove()
    })
    newMessage.appendChild(removeButton)
    messageList.appendChild(newMessage)
    messageForm.reset()
})



