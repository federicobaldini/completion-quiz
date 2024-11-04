// main.js

document.addEventListener("DOMContentLoaded", () => {
  startQuiz();

  // Aggiungi listener per il pulsante "Vai"
  document
    .getElementById("theorem-navigator")
    .addEventListener("submit", (e) => {
      e.preventDefault();

      const theoremNumber = parseInt(
        document.getElementById("theorem-id").value,
        10
      );
      goToTheorem(theoremNumber);
    });
});
