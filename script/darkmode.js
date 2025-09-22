const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

let currentTheme = localStorage.getItem("theme");

if (!currentTheme) {
  currentTheme = prefersDark ? "dark" : "light";
  localStorage.setItem("theme", currentTheme);
}

if (currentTheme === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.textContent = "🍓";
} else {
  body.classList.remove("dark-mode");
  toggleBtn.textContent = "🍫";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  let newTheme = body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", newTheme);

  toggleBtn.textContent = newTheme === "dark" ? "🍓" : "🍫";
});
