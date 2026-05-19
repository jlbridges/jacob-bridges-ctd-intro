

/*Add a footer element*/
body = document.querySelector('body')
body.appendChild(document.createElement('footer'))

/*Insert Copyright Text in Footer*/
today = new Date()
thisyear = today.getFullYear()

footer = document.querySelector('footer')
copyright = document.createElement('p')
copyright.innerHTML = `Jacob Bridges ${thisyear}`
footer.appendChild(copyright)

/*Create List of Skills*/

let skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"]

let skillsSection = document.getElementById('skills')
let skillsList = skillsSection.querySelector('ul')
for (let i = 0; i < skills.length; i++) {
    console.log(skills[i])
    skill = document.createElement('li')
    skill.innerHTML = skills[i]
    skillsList.appendChild(skill)

}


