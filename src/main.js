// main.js

document.addEventListener("DOMContentLoaded", () => {
  startQuiz();

  // Aggiungi listener per il pulsante "Vai"
  document.getElementById("go-button").addEventListener("click", () => {
    const theoremId = parseInt(document.getElementById("theorem-id").value, 10);
    goToTheorem(theoremId);
  });
});
