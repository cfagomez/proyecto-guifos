function modificarData(data) {
  data.data.map(function (e) {
    const gif = e.images.downsized.url;
    const img = document.createElement("IMG");
    img.setAttribute("src", gif);
    img.setAttribute("class", "gif-img");
    document.getElementById("tendencias-gifs-container").appendChild(img);
  });
}

fetch(
  "https://api.giphy.com/v1/gifs/trending?api_key=cMm1tYzqFl0jlQ83RRs4q4MMVlT9kMDx&limit=12&rating=G"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    modificarData(data);
  })
  .catch(function (error) {
    return error;
  });
