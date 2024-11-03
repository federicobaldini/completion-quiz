let data = jsonData.theorems;
let currentTheoremIndex = 0;
let currentPartIndex = 0;

// Inizializza il quiz
function startQuiz() {
  currentTheoremIndex = 0;
  currentPartIndex = 0;
  document.getElementById("current-answer").innerHTML = ""; // Reset della risposta composta
  showCurrentPart();
}

// Funzione per mescolare un array usando l'algoritmo di Fisher-Yates
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function showCurrentPart() {
  const theorem = data[currentTheoremIndex];
  const part = theorem.answer_parts[currentPartIndex];

  // Mescola le opzioni per questa parte
  const shuffledOptions = shuffle([...part.options]); // Crea una copia per evitare di modificare l'originale

  const questionArea = document.getElementById("question-area");
  questionArea.innerHTML = "";

  // Titolo della domanda
  const questionTitle = document.createElement("div");
  questionTitle.className = "question-title";
  questionTitle.innerHTML = `<strong>${theorem.question}</strong>`;
  questionArea.appendChild(questionTitle);

  // Lista delle opzioni mescolate
  const optionsList = document.createElement("ul");
  optionsList.className = "options";

  shuffledOptions.forEach((option) => {
    const optionItem = document.createElement("li");
    const optionButton = document.createElement("button");
    optionButton.className = "option-button";
    optionButton.innerHTML = option.text;
    optionButton.addEventListener("click", () =>
      selectOption(optionButton, option.is_correct)
    );
    optionItem.appendChild(optionButton);
    optionsList.appendChild(optionItem);
  });

  questionArea.appendChild(optionsList);

  // Aggiorna MathJax per le nuove formule
  MathJax.typesetPromise();
}

function selectOption(button, isCorrect) {
  // Disabilita tutti i pulsanti
  const buttons = document.querySelectorAll(".option-button");
  buttons.forEach((btn) => (btn.disabled = true));

  // Trova la risposta corretta
  const correctOption = data[currentTheoremIndex].answer_parts[
    currentPartIndex
  ].options.find((opt) => opt.is_correct);

  // Evidenzia la risposta scelta
  if (isCorrect) {
    button.classList.add("correct");
    addToCurrentAnswer(button.innerHTML); // Aggiungi la parte corretta alla risposta composta
  } else {
    button.classList.add("incorrect");

    // Se la risposta corretta è trovata, evidenziala in verde
    if (correctOption) {
      const correctButton = Array.from(buttons).find(
        (btn) => btn.innerHTML === correctOption.text
      );
      if (correctButton) {
        correctButton.classList.add("correct");
      }
    }
  }

  if (config.autoAdvance) {
    // Avanza automaticamente alla prossima parte dopo un breve intervallo
    setTimeout(() => {
      // Aggiunge comunque la risposta corretta alla risposta composta se l'utente ha sbagliato
      if (!isCorrect && correctOption) {
        addToCurrentAnswer(correctOption.text);
      }
      nextPart();
    }, 500); // Intervallo di 1 secondo (1000 ms) prima di avanzare
  } else {
    // Mostra il pulsante per la prossima parte
    const nextButton = document.getElementById("next-button");
    nextButton.style.display = "block";
    nextButton.onclick = () => {
      // Aggiunge comunque la risposta corretta alla risposta composta se l'utente ha sbagliato
      if (!isCorrect && correctOption) {
        addToCurrentAnswer(correctOption.text);
      }
      nextPart();
    };
  }
}

function addToCurrentAnswer(text) {
  const currentAnswerDiv = document.getElementById("current-answer");
  const partDiv = document.createElement("div");
  partDiv.innerHTML = text;
  currentAnswerDiv.appendChild(partDiv);

  // Aggiorna MathJax per la nuova formula
  MathJax.typesetPromise();
}

function nextPart() {
  const theorem = data[currentTheoremIndex];

  if (currentPartIndex < theorem.answer_parts.length - 1) {
    currentPartIndex++;
    showCurrentPart();
    document.getElementById("next-button").style.display = "none";
  } else {
    if (currentTheoremIndex < data.length - 1) {
      currentTheoremIndex++;
      currentPartIndex = 0;
      document.getElementById("current-answer").innerHTML = ""; // Reset della risposta composta
      showCurrentPart();
      document.getElementById("next-button").style.display = "none";
    } else {
      const questionArea = document.getElementById("question-area");
      questionArea.innerHTML = "<h2>Hai completato tutte le domande!</h2>";
      document.getElementById("next-button").style.display = "none";
    }
  }
}
