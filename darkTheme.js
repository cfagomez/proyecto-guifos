const dark = document.getElementById("darkTheme");
dark.addEventListener("click", function () {
  const principalTheme = document.getElementById("theme");
  principalTheme.setAttribute("href", "style2.css");
  const occultDropdown = document.getElementById("occult-items-dropdown");
  if (occultDropdown.style.display === "none") {
    occultDropdown.style.display = "block";
  } else {
    occultDropdown.style.display = "none";
  }
});
