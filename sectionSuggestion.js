function procesarData(data) {
  data.data.map(function (e) {
    const div = document.createElement("DIV");
    div.setAttribute("class", "gif-container");
    document.getElementById("sugerencias-gifs-container").appendChild(div);
    const span = document.createElement("SPAN");
    span.setAttribute("class", "gif-title-container");
    const gifTitle = e.title;
    const res = gifTitle.split("GIF");
    span.innerHTML = `#${res[0]}`;
    textoBusqueda = span.innerHTML;
    div.appendChild(span);
    const gif = e.images.downsized.url;
    const img = document.createElement("IMG");
    img.setAttribute("src", gif);
    img.setAttribute("width", "100%");
    img.setAttribute("class", "gif-img");
    div.appendChild(img);
    const button = document.createElement("BUTTON");
    button.setAttribute("class", "gif-button");
    button.setAttribute("id", "btnVerMas");
    div.appendChild(button);
    button.innerHTML = "Ver más...";
  });
}

fetch(
  "https://api.giphy.com/v1/gifs/trending?api_key=cMm1tYzqFl0jlQ83RRs4q4MMVlT9kMDx&limit=4&rating=G"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    procesarData(data);
  })
  .catch(function (error) {
    return error;
  });

// BOTON "VER MAS"

function processData2(data) {
  data.data.map(function (e) {
    const gif = e.images.downsized.url;
    const img = document.createElement("IMG");
    img.setAttribute("src", gif);
    img.setAttribute("width", "100%");
    img.setAttribute("height", "250px");
    document.getElementById("contenedorGif").appendChild(img);
  });
}

const botonVerMas = document.getElementById("btnVerMas");
botonVerMas.addEventListener("click", function () {
  const apiKey = "cMm1tYzqFl0jlQ83RRs4q4MMVlT9kMDx";
  const search = textoBusqueda;
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=12&rating=G&lang=en`;

  fetch(endpoint)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      processData2(data);
    })
    .catch(function (error) {
      return error;
    });
});
