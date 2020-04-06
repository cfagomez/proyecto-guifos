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
