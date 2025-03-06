document.addEventListener("DOMContentLoaded", function () {
  const portfolioSection = document.querySelector(".portfolio");
  const loadingMessage = document.createElement("p");
  loadingMessage.textContent = "Laddar projekt...";
  loadingMessage.classList.add("loading");
  portfolioSection.appendChild(loadingMessage);

  fetch("https://api.github.com/users/Bingoingo04/repos")
    .then((response) => response.json())
    .then((repos) => {
      loadingMessage.remove(); // Ta bort laddningsmeddelandet

      repos.forEach((repo) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        projectDiv.innerHTML = `
            <h3 class="project-title">${repo.name}</h3>
            <p class="project-description">${
              repo.description || "Ingen beskrivning tillgänglig."
            }</p>
            <a href="${
              repo.html_url
            }" target="_blank" class="btn">Visa på GitHub</a>
          `;

        portfolioSection.appendChild(projectDiv);
      });
    })
    .catch((error) => {
      loadingMessage.textContent = "Kunde inte ladda projekt.";
      console.error("Error fetching GitHub repositories:", error);
    });
});
