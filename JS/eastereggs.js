// Flytta closeModal-funktionen hit så den blir global
function closeModal() {
  const modal = document.getElementById("easterEggModal");
  modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  // Påskägg 1: Klick på sidfoten byter bakgrund
  const footer = document.querySelector("footer");
  let isToggled = false;

  footer.addEventListener("click", function () {
    document.body.style.backgroundColor = isToggled ? "#fff" : "#222";
    document.body.style.color = isToggled ? "#000" : "#fff";
    isToggled = !isToggled;
  });

  // Påskägg 2: Skriv "1337" för att öppna en modal-popup
  let secretCode = "1337";
  let inputSequence = "";
  document.addEventListener("keydown", function (event) {
    inputSequence += event.key;
    if (inputSequence.endsWith(secretCode)) {
      showModal();
      inputSequence = ""; // Nollställ sekvensen efter att påskägget aktiverats
    }
  });

  function showModal() {
    const modal = document.getElementById("easterEggModal");
    if (!modal) {
      console.error(
        "Modal-popup kunde inte hittas! Kontrollera att HTML har rätt ID."
      );
      return;
    }

    modal.style.display = "block"; // Visa modalen
    console.log("Modal visas!");
  }

  // Stäng modal när man klickar utanför modalen
  window.addEventListener("click", function (event) {
    const modal = document.getElementById("easterEggModal");
    if (event.target === modal) {
      closeModal();
    }
  });
});
