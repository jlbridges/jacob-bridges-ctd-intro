

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


