function processData(data) {
  data.data.map(function (e) {
    const gif = e.images.downsized.url;
    const img = document.createElement("IMG");
    img.setAttribute("src", gif);
    img.setAttribute("width", "100%");
    img.setAttribute("height", "250px");
    document.getElementById("contenedorGif").appendChild(img);
  });
}

function styleHistorialResults(historialResults) {
  historialResults.style.background = "#4180F6";
  historialResults.style.border = "1px solid #4C2F99";
  historialResults.style.boxShadow =
    "inset -2px -2px 0 0 #284F99, inset 2px 2px 0 0 #FFFFFF";
  historialResults.style.padding = "8px 10px";
  historialResults.style.marginRight = "10px";
  historialResults.style.color = " #FFFFFF";
  historialResults.style.fontFamily = "Chakra Petch, sans-serif";
}

const buttonSearch = document.getElementById("boton-buscador");
buttonSearch.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("contenedorGif").innerHTML = "";
  const inputValue = document.getElementById("buscador").value;
  const historialResults = document.createElement("SPAN");
  styleHistorialResults(historialResults);
  historialResults.innerHTML = inputValue;
  document.getElementById("resultsSection").style.display = "block";
  document.getElementById("historialContainer").appendChild(historialResults);
  document.getElementById("sugerencias-busqueda-oculto").style.display = "none";
  document.getElementById("lupaBuscador").src =
    "./gifOS_UI/assets/lupa_inactive.svg";
  document.getElementById("boton-buscador").style.background = "#E6E6E6";
  document.getElementById("texto-boton-buscador").style.color = "#B4B4B4";

  const apiKey = "cMm1tYzqFl0jlQ83RRs4q4MMVlT9kMDx";
  const search = inputValue;
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=12&rating=G&lang=en`;

  fetch(endpoint)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      processData(data);
    })
    .catch(function (error) {
      return error;
    });
  document.getElementById("buscador").value = "";
  document
    .getElementById("textInput")
    .setAttribute("placeholder", inputValue + " " + "(resultados)");
});

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
  document.getElementById("lupaBuscadorInactivo").src =
    "./gifOS_UI/assets/lupa_inactive.svg";
  document.getElementById("lupaBuscador").src = "./gifOS_UI/assets/lupa.svg";
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
  document.getElementById("sugerencias-busqueda-oculto").style.display = "none";
});
const iMSuggestion = document.getElementById("iMSuggestion");
iMSuggestion.addEventListener("click", function () {
  document.getElementById("buscador").placeholder = "";
  document.getElementById("buscador").value = "Inigo Montoya";
  document.getElementById("sugerencias-busqueda-oculto").style.display = "none";
});
const oBSuggestion = document.getElementById("oBSuggestion");
oBSuggestion.addEventListener("click", function () {
  document.getElementById("buscador").placeholder = "";
  document.getElementById("buscador").value = "Oldboy";
  document.getElementById("sugerencias-busqueda-oculto").style.display = "none";
});

//OPCIONES OCULTAS DE BUQUEDA

const buscador = document.getElementById("buscador");

const sugerenciasBusquedaOculto = document.getElementById(
  "sugerencias-busqueda-oculto"
);

buscador.addEventListener("input", function (e) {
  if (e.target.value.length === 0) {
    sugerenciasBusquedaOculto.style.display = "none";
    document.getElementById("lupaBuscador").style.display = "none";
    document.getElementById("lupaBuscadorInactivo").style.display = "inline";
    document
      .getElementById("boton-buscador")
      .setAttribute("class", "buscador-button");
  } else {
    sugerenciasBusquedaOculto.style.display = "block";
    document.getElementById("lupaBuscadorInactivo").style.display = "none";
    document.getElementById("lupaBuscador").style.display = "inline";
    document
      .getElementById("boton-buscador")
      .setAttribute("class", "buscador-button-active");
  }
});

//DARK THEME

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

  if (occultDropdown.style.display === "none") {
    occultDropdown.style.display = "block";
  } else {
    occultDropdown.style.display = "none";
  }
});
