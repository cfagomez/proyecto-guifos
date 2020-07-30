function modificarData(data) {
  data.data.map(function (e) {
    const div = document.createElement("DIV");
    div.setAttribute("class", "gifContainerTrending");
    div.setAttribute("id", "gifContainer");
    document.getElementById("tendencias-gifs-container").appendChild(div);

    const gif = e.images.downsized.url;
    const img = document.createElement("IMG");
    img.setAttribute("src", gif);
    img.setAttribute("class", "gifImgTrending");
    div.appendChild(img);

    const span = document.createElement("SPAN");
    span.setAttribute("class", "titleContainerTrending");
    div.appendChild(span);

    const gifSlug = e.slug;
    const res = gifSlug.split("-", 3);
    span.innerHTML = `#${res[0]} ` + `#${res[1]} ` + `#${res[2]} `;
    const textoBusqueda = span.innerHTML;
    div.appendChild(span);

    div.addEventListener("mouseover", function () {
      span.style.display = "block";
      div.setAttribute("class", "gifContainerTrendingHover");
      img.setAttribute("class", "gifImgTrendingHover");
    });
    div.addEventListener("mouseout", function () {
      span.style.display = "none";
      div.setAttribute("class", "gifContainerTrending");
      img.setAttribute("class", "gifImgTrending");
    });
  });
}

fetch(
  `https://api.giphy.com/v1/gifs/search?api_key=cMm1tYzqFl0jlQ83RRs4q4MMVlT9kMDx&q=random&limit=12&rating=G&lang=en`
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
