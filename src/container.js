// container.js

let data = jsonData.theorems;
let currentTheoremIndex = 0;
let currentPartIndex = 0;
let currentBlockIndex = 0;
let userSelections = [];
let lastPartIndexInAnswer = -1; // Traccia l'ultimo part aggiunto alla risposta

// Inizializza il quiz
function startQuiz() {
  currentTheoremIndex = 0;
  currentPartIndex = 0;
  currentBlockIndex = 0;
  userSelections = [];
  lastPartIndexInAnswer = -1;
  document.getElementById("current-answer").innerHTML = ""; // Reset della risposta composta
  showCurrentBlock();
}

// Funzione per mescolare un array usando l'algoritmo di Fisher-Yates
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function showCurrentBlock() {
  const theorem = data[currentTheoremIndex];
  if (
    !theorem ||
    !theorem.answer_parts ||
    !theorem.answer_parts[currentPartIndex]
  ) {
    console.error("Part o blocco non trovato.");
    return; // Uscita se i dati sono incompleti
  }

  const partBlocks = theorem.answer_parts[currentPartIndex];
  const block = partBlocks[currentBlockIndex];

  if (!block) {
    console.error("Blocco non trovato.");
    return; // Uscita se il blocco corrente è mancante
  }

  const questionArea = document.getElementById("question-area");
  questionArea.innerHTML = "";

  // Titolo della domanda
  const questionTitle = document.createElement("div");
  questionTitle.className = "question-title";
  questionTitle.innerHTML = `<strong>${theorem.question}</strong>`;
  questionArea.appendChild(questionTitle);

  // Contenitore per il blocco corrente
  const blockDiv = document.createElement("div");
  blockDiv.className = "block";

  // Mescola le opzioni per questo blocco
  const shuffledOptions = shuffle([...block.options]);

  // Lista delle opzioni mescolate per questo blocco
  const optionsList = document.createElement("ul");
  optionsList.className = "options";

  shuffledOptions.forEach((option) => {
    const optionItem = document.createElement("li");
    const optionButton = document.createElement("button");
    optionButton.className = "option-button";
    optionButton.innerHTML = option.text;
    optionButton.addEventListener("click", () =>
      selectOption(optionButton, option.is_correct, block)
    );
    optionItem.appendChild(optionButton);
    optionsList.appendChild(optionItem);
  });

  blockDiv.appendChild(optionsList);
  questionArea.appendChild(blockDiv);

  // Nascondi il pulsante "Avanti" finché non viene selezionata un'opzione
  const nextButton = document.getElementById("next-button");
  nextButton.style.display = "none";

  // Aggiorna MathJax per le nuove formule
  MathJax.typesetPromise();
}

function selectOption(button, isCorrect, block) {
  // Disabilita tutti i pulsanti nel blocco corrente
  const blockDiv = button.closest(".block");
  const buttons = blockDiv.querySelectorAll(".option-button");
  buttons.forEach((btn) => (btn.disabled = true));

  // Trova la risposta corretta
  const correctOption = block.options.find((opt) => opt.is_correct);

  // Evidenzia la risposta scelta
  if (isCorrect) {
    button.classList.add("correct");
    userSelections.push({ correct: true, text: button.innerHTML });
  } else {
    button.classList.add("incorrect");
    userSelections.push({ correct: false, text: button.innerHTML });

    // Evidenzia la risposta corretta
    if (correctOption) {
      const correctButton = Array.from(buttons).find(
        (btn) => btn.innerHTML === correctOption.text
      );
      if (correctButton) {
        correctButton.classList.add("correct");
      }
    }
  }

  // Aggiunge la risposta corretta alla risposta composta
  if (correctOption) {
    addToCurrentAnswer(correctOption.text, currentPartIndex);
  }

  // Controlla se è l'ultimo blocco dell'ultimo part
  const theorem = data[currentTheoremIndex];
  const isLastBlock =
    currentPartIndex === theorem.answer_parts.length - 1 &&
    currentBlockIndex === theorem.answer_parts[currentPartIndex].length - 1;

  if (isLastBlock) {
    // Evidenzia il blocco della risposta attuale per indicare che è completa
    addHighlightToCurrentAnswer();

    // Mostra il pulsante "Avanti" per passare al prossimo teorema
    const nextButton = document.getElementById("next-button");
    nextButton.style.display = "block";
    nextButton.innerHTML = "Prossima domanda";
    nextButton.onclick = () => {
      removeHighlightToCurrentAnswer();
      nextPart(); // Avanza al prossimo teorema
    };
  } else {
    if (config.autoAdvance) {
      // Avanza automaticamente al blocco successivo dopo un breve intervallo
      setTimeout(() => {
        nextBlock();
      }, 500); // Intervallo di 0.5 secondi prima di avanzare
    } else {
      // Mostra il pulsante "Avanti" per passare al blocco successivo
      const nextButton = document.getElementById("next-button");
      nextButton.style.display = "block";
      nextButton.innerHTML = "Avanti";
      nextButton.onclick = () => {
        nextBlock();
      };
    }
  }
}

function addToCurrentAnswer(text, partIndex) {
  const currentAnswerDiv = document.getElementById("current-answer");

  // Crea una nuova riga se il partIndex è diverso dall'ultimo aggiunto
  if (partIndex !== lastPartIndexInAnswer) {
    // Crea una nuova answer-row
    const newRow = document.createElement("div");
    newRow.className = "answer-row";
    currentAnswerDiv.appendChild(newRow);
    lastPartIndexInAnswer = partIndex;
  }

  // Aggiungi il testo alla riga corrente
  const lastRow = currentAnswerDiv.lastElementChild;
  const partSpan = document.createElement("span");
  partSpan.innerHTML = text + " "; // Aggiungi uno spazio per separare le parti
  lastRow.appendChild(partSpan);

  // Aggiorna MathJax per la nuova formula
  MathJax.typesetPromise();
}

function addHighlightToCurrentAnswer() {
  const currentAnswerDiv = document.getElementById("current-answer");
  currentAnswerDiv.classList.add("highlighted-answer");
}

function removeHighlightToCurrentAnswer() {
  const currentAnswerDiv = document.getElementById("current-answer");
  currentAnswerDiv.classList.remove("highlighted-answer");
}

function nextBlock() {
  const theorem = data[currentTheoremIndex];
  const partBlocks = theorem.answer_parts[currentPartIndex];

  // Verifica se tutte le selezioni del blocco corrente sono corrette
  const isBlockCorrect = userSelections.every((selection) => selection.correct);

  // Aggiorna il punteggio in base alla correttezza del blocco
  updateScore(isBlockCorrect);

  // Reset delle selezioni per il prossimo blocco
  userSelections = [];

  if (currentBlockIndex < partBlocks.length - 1) {
    currentBlockIndex++;
    showCurrentBlock();
  } else {
    // Reset del blocco per la prossima parte
    currentBlockIndex = 0;
    nextPart();
  }
}

function nextPart() {
  const theorem = data[currentTheoremIndex];
  if (!theorem) {
    console.error("Teorema non trovato.");
    return;
  }

  if (currentPartIndex < theorem.answer_parts.length - 1) {
    currentPartIndex++;
    currentBlockIndex = 0; // Reset del blocco corrente
    showCurrentBlock();
    document.getElementById("next-button").style.display = "none";
  } else {
    if (currentTheoremIndex < data.length - 1) {
      currentTheoremIndex++;
      currentPartIndex = 0;
      currentBlockIndex = 0;
      userSelections = [];
      document.getElementById("current-answer").innerHTML = ""; // Reset della risposta composta
      showCurrentBlock();
      document.getElementById("next-button").style.display = "none";
    } else {
      const questionArea = document.getElementById("question-area");
      questionArea.innerHTML = "<h2>Hai completato tutte le domande!</h2>";
      document.getElementById("next-button").style.display = "none";
    }
  }
}
