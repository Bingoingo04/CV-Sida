document.addEventListener("DOMContentLoaded", function () {
  fetch("../JSON/cv-data.json")
    .then((response) => response.json())
    .then((data) => {
      const cvSection = document.querySelector(".cv-section");

      data.jobs.forEach((job) => {
        const jobDiv = document.createElement("div");
        jobDiv.classList.add("job");

        jobDiv.innerHTML = `
            <h3 class="job-title">${job.title}</h3>
            <p class="job-company">${job.company} | ${job.period}</p>
            <ul class="job-description">
              ${job.tasks.map((task) => `<li>${task}</li>`).join("")}
            </ul>
          `;

        cvSection.appendChild(jobDiv);
      });
    })
    .catch((error) => console.error("Error loading CV data:", error));
});
