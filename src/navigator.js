function goToTheorem(theoremNumber) {
  if (theoremNumber <= data.length) {
    // Imposta l'indice corrente e resetta la parte
    currentTheoremIndex = theoremNumber - 1;
    currentPartIndex = 0;

    // Svuota la risposta composta e mostra il nuovo teorema
    document.getElementById("current-answer").innerHTML = "";
    showCurrentPart();
  } else {
    alert("Teorema non trovato. Assicurati di inserire un ID valido.");
  }
}
