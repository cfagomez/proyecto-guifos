const dark = document.getElementById("darkTheme");
dark.addEventListener("click", function () {
  const principalTheme = document.getElementById("theme");
  principalTheme.setAttribute("href", "style2.css");
});
