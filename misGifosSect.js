if (localStorage.getItem("GifsURL")) {
  const gifsURL = JSON.parse(localStorage.getItem("GifsURL"));
  gifsURL.map(function (e) {
    const currentGif = e;
    const gifImg = document.createElement("IMG");

    gifImg.setAttribute("src", currentGif);
    gifImg.setAttribute("width", "100%");
    gifImg.setAttribute("height", "250px");

    document.getElementById("misGifosGifsContainer").appendChild(gifImg);
  });
}
