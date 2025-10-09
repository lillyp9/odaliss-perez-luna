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

//---Leave a Message Form---//

const messageForm = document.getElementById("leave-message");

    messageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = event.target.usersName.value;
    const email = event.target.usersEmail.value;
    const message = event.target.usersMessage.value;
    console.log(name, email, message);

const messageList = document.getElementById("messages-list");
const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a>: ${message}`;
    

const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.type = "button";
    removeButton.addEventListener("click", function () {
    newMessage.remove();
});
  
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    event.target.reset();
});

//---Fetch GitHub Repositories---//

