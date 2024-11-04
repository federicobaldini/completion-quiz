function goToTheorem() {
  const theoremNumberInput = document.getElementById("theorem-id").value;
  const theoremId = parseInt(theoremNumberInput, 10);

  if (!isNaN(theoremId)) {
    // Trova l'indice del teorema con l'ID corrispondente
    const theoremIndex = data.findIndex((theorem) => theorem.id === theoremId);

    if (theoremIndex !== -1) {
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
      alert("Teorema non trovato. Inserisci un ID di teorema valido.");
    }
  } else {
    alert("Per favore inserisci un numero ID di teorema valido.");
  }
}
