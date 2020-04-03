function processData(data) {
  data.data.map(function(e) {
    const gif = e.images.original.url;
    const img = document.createElement("IMG");
    img.setAttribute("src", gif);
    document.getElementById("contenedorGif").appendChild(img);
  });
}

const buttonSearch = document.getElementById("boton-buscador");
buttonSearch.addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("contenedorGif").innerHTML = "";
  const inputValue = document.getElementById("buscador").value;

  const apiKey = "cMm1tYzqFl0jlQ83RRs4q4MMVlT9kMDx";
  const search = inputValue;
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=3&rating=G&lang=en`;

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
  document.getElementById("buscador").innerHTML = "";
});
