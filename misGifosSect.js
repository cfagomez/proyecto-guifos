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
