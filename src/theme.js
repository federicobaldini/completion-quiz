// theme-toggle.js
const toggleCheckbox = document.getElementById("toggle-checkbox");

toggleCheckbox.addEventListener("change", () => {
  if (toggleCheckbox.checked) {
    enableLightTheme();
  } else {
    enableDarkTheme();
  }
});

// Funzione per abilitare il tema chiaro
function enableLightTheme() {
  document.documentElement.style.setProperty("--background-color", "#FFFFFF");
  document.documentElement.style.setProperty("--text-primary", "#212121");
  document.documentElement.style.setProperty("--text-secondary", "#424242");
  document.documentElement.style.setProperty("--container-bg", "#F5F5F5");
  document.documentElement.style.setProperty("--button-bg", "#E0E0E0");
  document.documentElement.style.setProperty("--button-border", "#E0E0E0");
  document.documentElement.style.setProperty("--button-hover-bg", "#CCCCCC");
  document.documentElement.style.setProperty(
    "--button-hover-border",
    "#CCCCCC"
  );
  document.documentElement.style.setProperty("--input-bg", "#FFFFFF");
  document.documentElement.style.setProperty("--input-border", "#CCCCCC");
  document.documentElement.style.setProperty(
    "--highlight-background",
    "#E0E0E0"
  );
}

// Funzione per abilitare il tema scuro
function enableDarkTheme() {
  document.documentElement.style.setProperty("--background-color", "#1E1E1E");
  document.documentElement.style.setProperty("--text-primary", "#E0E0E0");
  document.documentElement.style.setProperty("--text-secondary", "#B0B0B0");
  document.documentElement.style.setProperty("--container-bg", "#2B2B2B");
  document.documentElement.style.setProperty("--button-bg", "#3B3B3B");
  document.documentElement.style.setProperty("--button-border", "#3B3B3B");
  document.documentElement.style.setProperty("--button-hover-bg", "#565656");
  document.documentElement.style.setProperty(
    "--button-hover-border",
    "#565656"
  );
  document.documentElement.style.setProperty("--input-bg", "#3B3B3B");
  document.documentElement.style.setProperty("--input-border", "#555555");
  document.documentElement.style.setProperty(
    "--highlight-background",
    "#3B3B3B"
  );
}

// Imposta il tema iniziale basato sulla preferenza del sistema
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: light)").matches
) {
  toggleCheckbox.checked = true;
  enableLightTheme();
} else {
  enableDarkTheme();
}
