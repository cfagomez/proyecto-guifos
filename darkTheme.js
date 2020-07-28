const dark = document.getElementById("darkTheme");
dark.addEventListener("click", function () {
  const principalTheme = document.getElementById("theme");
  principalTheme.setAttribute("href", "style2.css");
  const occultDropdown = document.getElementById("occult-items-dropdown");
  document.getElementById("lupaBuscadorInactivo").src =
    "./gifOS_UI/assets/combined_shape.svg";
  document.getElementById("lupaBuscador").src =
    "./gifOS_UI/assets/lupa_light.svg";
  document
    .getElementById("lupaBuscador")
    .setAttribute("class", "lupaBuscadorClaro");
  //document.getElementById("lupaBuscador").src =
  //"./gifOS_UI/assets/lupa_inactive.svg";

  if (occultDropdown.style.display === "none") {
    occultDropdown.style.display = "block";
  } else {
    occultDropdown.style.display = "none";
  }
});
