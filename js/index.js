// ---Footer---//
let today = new Date();

let thisYear = today.getFullYear();

let footer = document.querySelector("footer");

let copyright = document.createElement("p");

copyright.innerHTML = "Odaliss Perez &#169; " + thisYear;

footer.appendChild(copyright);

//---Skills Section---//


const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "GitHub",
    "Responsive Design",
    "Flexbox",
    "DOM Manipulation"
];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const li = document.createElement("li");
    li.innerText = skills[i];
    skillsList.appendChild(li);
}
