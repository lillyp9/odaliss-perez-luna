// ---Footer---//

const footerText = document.createElement("footer-text");
const thisYear = new Date().getFullYear();
footerText.innerHTML = "<p>Odaliss Perez &#169; " + thisYear + "</p>";
document.addEventListener("DOMContentLoaded", function () {
  const footer = document.getElementById("site-footer");
  footer.appendChild(footerText);
});

//---Skills Section---//

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Git",
  "GitHub",
  "Responsive Design",
  "Flexbox",
  "DOM Manipulation",
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

  const name = document.getElementById("usersName").value;
  const email = document.getElementById("usersEmail").value;
  const message = document.getElementById("usersMessage").value;

  console.log(name, email, message);

  //Function to dsiplay the message on the page and have the button //

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
const projectSection = document.getElementById("projects-list");

fetch("https://api.github.com/users/lillyp9/repos", { method: "GET" })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Network not responding! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((response) => {
    projectSection.innerHTML = "";
    response.forEach((repo) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = repo.html_url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = repo.name;
      a.setAttribute("aria-label", `Link to ${repo.name} repository`);

      li.appendChild(a);
      projectSection.appendChild(li);
    });
  })

  /* Console log for developers and message for regular users */
  .catch((error) => {
    const projectList = document.getElementById("projects-list");
    const errorMessage = document.createElement("li");
    errorMessage.textContent =
      "Sorry, we are unable to load the projects at this time. Please try again later.";
    errorMessage.style.color = "red";
    projectList.appendChild(errorMessage);
    console.error(
      "There was a problem with the fetch operation:",
      error.message
    );
  });
