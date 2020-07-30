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

//DROPDOWN ITEMS

const dropdownArrow = document.getElementById("arrow");
dropdownArrow.addEventListener("click", function () {
  const occultDropdown = document.getElementById("occult-items-dropdown");
  if (occultDropdown.style.display === "none") {
    occultDropdown.style.display = "block";
  } else {
    occultDropdown.style.display = "none";
  }
});

//THEMES

const sailor = document.getElementById("lightTheme");
sailor.addEventListener("click", function () {
  const principalTheme = document.getElementById("theme");
  principalTheme.setAttribute("href", "style.css");
  const occultDropdown = document.getElementById("occult-items-dropdown");
  if (occultDropdown.style.display === "none") {
    occultDropdown.style.display = "block";
  } else {
    occultDropdown.style.display = "none";
  }
});

const dark = document.getElementById("darkTheme");
dark.addEventListener("click", function () {
  const principalTheme = document.getElementById("theme");
  principalTheme.setAttribute("href", "style2.css");
  const occultDropdown = document.getElementById("occult-items-dropdown");

  if (occultDropdown.style.display === "none") {
    occultDropdown.style.display = "block";
  } else {
    occultDropdown.style.display = "none";
  }
});
