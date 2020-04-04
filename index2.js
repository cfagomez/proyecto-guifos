function processData(data) {
  data.data.map(function(e) {
    const gif = e.images.downsized.url;
    const img = document.createElement("IMG");
    img.setAttribute("src", gif);
    img.setAttribute("width", "100%");
    img.setAttribute("height", "300px");
    document.getElementById("contenedorGif").appendChild(img);
  });
}

const buttonSearch = document.getElementById("boton-buscador");
buttonSearch.addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("contenedorGif").innerHTML = "";
  const inputValue = document.getElementById("buscador").value;
  const historialResults = document.createElement("SPAN");
  document.getElementById("historialContainer").appendChild(historialResults);

  const apiKey = "cMm1tYzqFl0jlQ83RRs4q4MMVlT9kMDx";
  const search = inputValue;
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=12&rating=G&lang=en`;

  fetch(endpoint)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      processData(data);
    })
    .catch(function(error) {
      return error;
    });
  document.getElementById("buscador").value = "";
  document
    .getElementById("textInput")
    .setAttribute("placeholder", inputValue + " " + "(resultados)");
});