function goToTheorem(theoremId) {
  const theoremIndex = data.findIndex((theorem) => theorem.id === theoremId);

  if (theoremIndex !== -1) {
    // Imposta l'indice corrente e resetta la parte
    currentTheoremIndex = theoremIndex;
    currentPartIndex = 0;

    // Svuota la risposta composta e mostra il nuovo teorema
    document.getElementById("current-answer").innerHTML = "";
    showCurrentPart();
  } else {
    alert("Teorema non trovato. Assicurati di inserire un ID valido.");
  }
}
