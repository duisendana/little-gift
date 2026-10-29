function showScreen(screenId) {
  const screens = document.querySelectorAll(".screen");

  screens.forEach((screen) => {
    screen.classList.remove("active");
  });

  const nextScreen = document.getElementById(screenId);

  if (nextScreen) {
    nextScreen.classList.add("active");
  }

  window.scrollTo(0, 0);
}

// Welcome → Secret code
function startExperience() {
  showScreen("code");
}

// Check secret code
function unlock() {
  const codeInput = document.getElementById("secretCode");
  const errorMessage = document.getElementById("codeError");

  if (!codeInput) return;

  if (codeInput.value.trim() === "2302") {
    if (errorMessage) errorMessage.textContent = "";
    showScreen("date");
  } else {
    if (errorMessage) {
      errorMessage.textContent = "Wrong code! Try again, uncle ♡";
    }
    codeInput.value = "";
    codeInput.focus();
  }
}

// Date screen → Memory
function openMemory() {
  showScreen("memory");
}

// Memory → Puzzle
function openPuzzle() {
  showScreen("puzzle");
}

// Check puzzle answer
function checkAnswer() {
  const answerInput = document.getElementById("mathAnswer");
  const errorMessage = document.getElementById("puzzleError");

  if (!answerInput) return;

  if (answerInput.value.trim() === "11") {
    if (errorMessage) errorMessage.textContent = "";
    showScreen("unlocked");
  } else {
    if (errorMessage) {
      errorMessage.textContent = "Not quite! Try again 🩵";
    }
    answerInput.value = "";
    answerInput.focus();
  }
}

// Puzzle unlocked → Letter
function openLetter() {
  showScreen("letter");
}

// Letter → Ending
function finishExperience() {
  showScreen("ending");
}

// Heart navigation
function goBack(screenId) {
  showScreen(screenId);
}

// Press Enter to submit inputs
document.addEventListener("DOMContentLoaded", () => {
  const codeInput = document.getElementById("secretCode");
  const answerInput = document.getElementById("mathAnswer");

  if (codeInput) {
    codeInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        unlock();
      }
    });
  }

  if (answerInput) {
    answerInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        checkAnswer();
      }
    });
  }
});