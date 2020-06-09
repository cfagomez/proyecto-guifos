function procesarDatos(datos) {
  datos.data.map(function (e) {
    const gif = e.images.downsized.url;
    const img = document.createElement("IMG");
    img.setAttribute("src", gif);
    img.setAttribute("width", "100%");
    img.setAttribute("height", "250px");
    document.getElementById("misGifosGifsContainer").appendChild(img);
  });
}

fetch(
  "https://api.giphy.com/v1/gifs/search?api_key=cMm1tYzqFl0jlQ83RRs4q4MMVlT9kMDx&q=80s horror movies&limit=8&offset=0&rating=R&lang="
)
  .then(function (response) {
    return response.json();
  })
  .then(function (datos) {
    console.log(datos);
    procesarDatos(datos);
  })
  .catch(function (error) {
    return error;
  });

const backArrow = document.getElementById("backArrow");
backArrow.addEventListener("click", function () {
  window.history.back();
});

const cancelarButton = document.getElementById("cancelarButton");
cancelarButton.addEventListener("click", function () {
  document.getElementById("crearGuifosWindow").style.display = "none";
});

document
  .getElementById("comenzarButton")
  .addEventListener("click", function () {
    document.getElementById("wrapperMisGifosSection").style.display = "none";
  });
