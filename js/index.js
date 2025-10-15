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

fetch('https://api.github.com/users/lillyp9/repos', { method: 'GET' }) 

.then(response => {
    if (!response.ok) {
        throw new Error(`Network not responding! Status: ${response.status}`);
    }
    return response.json();
})

.then(repositories => {
    console.log(repositories);
    
    const projectSection = document.getElementById("projects");                     
    const projectList = projectSection.querySelector('ul'); 
   
    for (let i = 0; i < repositories.length; i++) {
        const project = repositories[i];
        const li = document.createElement('li');
        const a = document.createElement('a');
        
        a.href = project.html_url;
        a.target = "_blank";
        a.textContent = project.name;
        
        li.appendChild(a);
        projectList.appendChild(li);
    }
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error.message);
});

