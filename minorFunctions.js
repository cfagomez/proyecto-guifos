const dropdownArrow = document.getElementById("arrow");
dropdownArrow.addEventListener("click", function () {
  const occultDropdown = document.getElementById("occult-items-dropdown");
  occultDropdown.classList.toggle("visible-items-dropdown");
});

const sailor = document.getElementById("lightTheme");
sailor.addEventListener("click", function () {
  const principalTheme = document.getElementById("theme");
  principalTheme.setAttribute("href", "style.css");
});
