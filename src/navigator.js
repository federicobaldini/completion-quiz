function goToTheorem() {
  const theoremNumberInput = document.getElementById("theorem-number").value;
  const theoremIndex = parseInt(theoremNumberInput, 10) - 1;

  if (!isNaN(theoremIndex) && theoremIndex >= 0 && theoremIndex < data.length) {
    // Aggiorna l'indice corrente del teorema e della parte
    currentTheoremIndex = theoremIndex;
    currentPartIndex = 0;
    currentBlockIndex = 0;
    userSelections = [];
    lastPartIndexInAnswer = -1;

    // Reset della risposta corrente visualizzata
    document.getElementById("current-answer").innerHTML = "";
    document
      .getElementById("current-answer")
      .classList.remove("highlighted-answer");

    // Mostra il teorema richiesto
    showCurrentBlock();
  } else {
    alert(
      "Numero di teorema non valido. Inserisci un numero compreso tra 1 e " +
        data.length
    );
  }
}
