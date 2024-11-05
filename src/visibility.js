document
  .getElementById("toggle-answer-button")
  .addEventListener("click", toggleOptionsVisibility);

function toggleOptionsVisibility() {
  const optionsList = document.querySelector(".options");
  const toggleButton = document.getElementById("toggle-answer-button");

  if (optionsList) {
    optionsList.classList.toggle("hidden-options");

    if (optionsList.classList.contains("hidden-options")) {
      toggleButton.textContent = "Mostra opzioni";
    } else {
      toggleButton.textContent = "Nascondi opzioni";
    }
  }
}
