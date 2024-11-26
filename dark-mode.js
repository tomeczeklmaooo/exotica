const themeCheckbox = document.getElementById("theme-checkbox");
const currentTheme = localStorage.getItem("theme");

// Apply the saved theme on page load
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    themeCheckbox.checked = true;
  }
}

// Add event listener to toggle the theme
themeCheckbox.addEventListener("change", () => {
  const newTheme = themeCheckbox.checked ? "dark" : "light";

  // Apply the new theme and save it to local storage
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});
