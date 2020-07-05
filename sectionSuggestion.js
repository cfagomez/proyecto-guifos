function processDataSuggestion(data) {
  data.data.map(function (e) {
    const gif = e.images.downsized.url;
    const img = document.createElement("IMG");
    img.setAttribute("src", gif);
    img.setAttribute("width", "100%");
    img.setAttribute("height", "250px");
    document.getElementById("contenedorGif").appendChild(img);
    document.getElementById("resultsSection").style.display = "block";
  });
}

function procesarData(data) {
  data.data.map(function (e) {
    const div = document.createElement("DIV");
    div.setAttribute("class", "gif-container");
    div.setAttribute("id", "gifContainer");
    document.getElementById("sugerencias-gifs-container").appendChild(div);

    const span = document.createElement("SPAN");
    span.setAttribute("class", "gif-title-container");

    const gifTitle = e.title;
    const res = gifTitle.split("GIF");
    span.innerHTML = `#${res[0]}`;
    const textoBusqueda = span.innerHTML;
    div.appendChild(span);

    const closeImg = document.createElement("IMG");
    closeImg.setAttribute("src", "./gifOS_UI/assets/close.svg");
    span.appendChild(closeImg);
    closeImg.addEventListener("click", function () {
      div.remove();
      //document.getElementById("gifContainer").style.display = "none";
    });

    const gif = e.images.downsized.url;
    const img = document.createElement("IMG");
    img.setAttribute("src", gif);
    img.setAttribute("class", "gif-img");
    div.appendChild(img);

    const button = document.createElement("BUTTON");
    button.setAttribute("class", "gif-button");
    button.setAttribute("id", "btnVerMas");
    button.addEventListener("click", function () {
      location.href = "#textInput";
    });
    div.appendChild(button);
    button.innerHTML = "Ver más...";

    button.addEventListener("click", function () {
      document.getElementById("contenedorGif").innerHTML = "";

      document.getElementById("textInput").placeholder =
        textoBusqueda.replace("#", "") + "{resultados}";

      const apiKey = "cMm1tYzqFl0jlQ83RRs4q4MMVlT9kMDx";
      const search = textoBusqueda.replace("#", "");
      const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=12&rating=G&lang=en`;

      fetch(endpoint)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          processDataSuggestion(data);
        })
        .catch(function (error) {
          return error;
        });
    });
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
