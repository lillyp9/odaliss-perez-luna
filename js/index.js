// ---Footer---//


function createFooter() {
    const footer = document.createElement("footer");
    const thisYear = new Date().getFullYear();
    footer.innerHTML = "<p>Odaliss Perez &#169; " + thisYear + "</p>";
    document.body.appendChild(footer);
}
document.addEventListener("DOMContentLoaded", createFooter);

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
