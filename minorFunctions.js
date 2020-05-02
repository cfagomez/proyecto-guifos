//THEMES

const dropdownArrow = document.getElementById("arrow");
dropdownArrow.addEventListener("click", function () {
  const occultDropdown = document.getElementById("occult-items-dropdown");
  if (occultDropdown.style.display === "none") {
    occultDropdown.style.display = "block";
  } else {
    occultDropdown.style.display = "none";
  }
});

const sailor = document.getElementById("lightTheme");
sailor.addEventListener("click", function () {
  const principalTheme = document.getElementById("theme");
  principalTheme.setAttribute("href", "style.css");
  const occultDropdown = document.getElementById("occult-items-dropdown");
  if (occultDropdown.style.display === "none") {
    occultDropdown.style.display = "block";
  } else {
    occultDropdown.style.display = "none";
  }
});

// SUGERENCIAS DE BUSQUEDA

const bABSuggestion = document.getElementById("bABSuggestion");
bABSuggestion.addEventListener("click", function () {
  document.getElementById("buscador").placeholder = "";
  document.getElementById("buscador").value = "Beavis and Butthead";
});
const iMSuggestion = document.getElementById("iMSuggestion");
iMSuggestion.addEventListener("click", function () {
  document.getElementById("buscador").placeholder = "";
  document.getElementById("buscador").value = "Inigo Montoya";
});
const oBSuggestion = document.getElementById("oBSuggestion");
oBSuggestion.addEventListener("click", function () {
  document.getElementById("buscador").placeholder = "";
  document.getElementById("buscador").value = "Oldboy";
});

//OPCIONES OCULTAS DE BUQUEDA

const buscador = document.getElementById("buscador");
const sugerenciasBusquedaOculto = document.getElementById(
  "sugerencias-busqueda-oculto"
);

buscador.addEventListener("input", function (e) {
  if (e.target.value.length === 0) {
    sugerenciasBusquedaOculto.style.display = "none";
  } else {
    sugerenciasBusquedaOculto.style.display = "block";
  }
});
