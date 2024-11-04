let score = 0; // Punteggio totale
let correctStreak = 0; // Conta le risposte corrette consecutive
const streakThreshold = 100; // Soglia per iniziare lo streak
const normalPoints = 100; // Punti per una risposta corretta
const streakPoints = 200; // Punti per una risposta corretta durante lo streak

function updateScore(isCorrect) {
  const scoreCounter = document.getElementById("score-counter");

  if (isCorrect) {
    correctStreak++; // Incrementa lo streak

    if (correctStreak >= streakThreshold) {
      score += streakPoints;
      scoreCounter.classList.add("score-streak");
      scoreCounter.classList.remove("score-normal");

      // Applica l'animazione "glitch" futuristica per lo streak
      scoreCounter.style.animation = "streak-glitch 0.6s ease-in-out";
    } else {
      score += normalPoints;
      scoreCounter.classList.add("score-normal");
      scoreCounter.classList.remove("score-streak");

      // Applica l'animazione di flash per incremento normale
      scoreCounter.style.animation = "score-flash 0.6s ease-in-out";
    }

    // Rimuove l'animazione dopo che è finita per poterla riapplicare al prossimo incremento
    scoreCounter.addEventListener(
      "animationend",
      () => {
        scoreCounter.style.animation = "";
      },
      { once: true }
    ); // Esegui il listener solo una volta e poi rimuovilo automaticamente
  } else {
    // Azzeramento dello streak in caso di risposta errata
    correctStreak = 0;
    scoreCounter.classList.add("score-normal");
    scoreCounter.classList.remove("score-streak");
  }

  // Aggiorna il valore del punteggio
  document.getElementById("score-value").textContent = score;
}
