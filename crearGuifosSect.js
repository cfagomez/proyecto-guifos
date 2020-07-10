if (localStorage.getItem("GifsURL")) {
  const gifsURL = JSON.parse(localStorage.getItem("GifsURL"));
  gifsURL.map(function (e) {
    const currentGif = e;
    const gifImg = document.createElement("IMG");

    gifImg.setAttribute("src", currentGif);
    gifImg.setAttribute("width", "100%");
    gifImg.setAttribute("height", "250px");
    gifImg.setAttribute("class", "gifImg");
    gifImg.setAttribute("id", "gifImg");

    document.getElementById("crearGifosGifsContainer").appendChild(gifImg);
  });
}

const backArrow = document.getElementById("backArrow");
backArrow.addEventListener("click", function () {
  window.history.back();
});

const cancelarButton = document.getElementById("cancelarButton");
cancelarButton.addEventListener("click", function () {
  document.getElementById("crearGuifosWindow").style.display = "none";
});
