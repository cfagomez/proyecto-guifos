function procesarData(data) {
  data.data.map(function (e) {
    const div = document.createElement("DIV");
    div.setAttribute("class", "gif-container");
    document.getElementById("sugerencias-gifs-container").appendChild(div);
    const span = document.createElement("SPAN");
    span.setAttribute("class", "gif-title-container");
    const gifTitle = e.title;
    span.innerHTML = `#${gifTitle}`;
    div.appendChild(span);
    const gif = e.images.downsized.url;
    const img = document.createElement("IMG");
    img.setAttribute("src", gif);
    img.setAttribute("width", "100%");
    img.setAttribute("class", "gif-img");
    div.appendChild(img);
    const button = document.createElement("BUTTON");
    button.setAttribute("class", "gif-button");
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
