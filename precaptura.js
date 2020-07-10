function saveGifInLocalStorage(data) {
  const gifURL = data.data.images.downsized.url;
  if (localStorage.getItem("GifsURL")) {
    const currentGifsURL = JSON.parse(localStorage.getItem("GifsURL"));
    currentGifsURL.push(gifURL);
    localStorage.setItem("GifsURL", JSON.stringify(currentGifsURL));
  } else {
    localStorage.setItem("GifsURL", JSON.stringify([gifURL]));
  }
}

function previewGif(data) {
  const gifPreviewUrl = data.data.images.downsized.url;

  const gifPreview = document.createElement("IMG");
  gifPreview.setAttribute("src", gifPreviewUrl);
  gifPreview.setAttribute("width", "100%");
  gifPreview.setAttribute("height", "190px");
  gifPreview.setAttribute("class", "gifImg");
  gifPreview.setAttribute("id", "gifImg");

  document.getElementById("guifoSubidoVistaPrevia").appendChild(gifPreview);
}

function putGifInMisGuifos() {
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
}

const comenzarButton = document.getElementById("comenzarButton");
comenzarButton.addEventListener("click", function () {
  const crearGuifosWindow = document.getElementById("crearGuifosWindow");
  crearGuifosWindow.style.display = "none";
});
comenzarButton.addEventListener("click", function () {
  document.getElementById("wrapperMisGifosSection").style.display = "none";
});
comenzarButton.addEventListener("click", function () {
  const precapturaContainer = document.getElementById("precapturaContainer");
  precapturaContainer.style.display = "flex";
});
comenzarButton.addEventListener("click", function () {
  const constraints = {
    audio: false,
    video: true,
  };
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function (mediaStream) {
      const video = document.getElementById("precaptura");
      video.srcObject = mediaStream;
      video.onloadedmetadata = function (e) {
        video.play();
      };
      capturarButton.addEventListener("click", function () {
        const recorder = RecordRTC(mediaStream, {
          type: "gif",
          frameRate: 1,
          quality: 10,
          hidden: 240,
        });

        recorder.startRecording();

        listoButton.addEventListener("click", async function () {
          recorder.stopRecording(function () {
            const blob = recorder.blob;
            const url = URL.createObjectURL(blob);
            document.getElementById("gifRecorded").src = url;

            document
              .getElementById("subirGuifoButton")
              .addEventListener("click", function () {
                document.getElementById("gifRecorded").style.display = "none";
                document.getElementById("closePrecaptura").style.display =
                  "inline";
                document.getElementById("cronometro").style.display = "none";
                document.getElementById("precapturaTitle").innerHTML =
                  "Subiendo Guifo";
                document.getElementById("subirGuifoButton").style.display =
                  "none";
                document.getElementById("repetirCapturaButton").style.display =
                  "none";
                document.getElementById("cancelarSubidaButton").style.display =
                  "block";
                document.getElementById("subiendoGifoContainer").style.display =
                  "flex";

                let form = new FormData();
                form.append("file", blob, "myGif.gif");

                const apiKey = "6eH8kp3hSurlCHG7I1wPwAg39rnlm9fq";
                const endpoint = `https://upload.giphy.com/v1/gifs?api_key=${apiKey}&username=cuervoSabbath&source_image_url=${url}&tags=cuervo, crow, raven&source_post_url=http://127.0.0.1:5500/misGifosSect.html`;

                const controller = new AbortController();
                const signal = controller.signal;
                document
                  .getElementById("cancelarSubidaButton")
                  .addEventListener("click", function () {
                    controller.abort();
                    console.log("Download aborted");
                    window.location.href = "creaGuifos.html";
                  });

                fetch(endpoint, {
                  signal,
                  method: "POST",
                  body: form,
                })
                  .then(function (response) {
                    return response.json();
                  })
                  .then(function (data) {
                    const myGif = data.data.id;
                    if (localStorage.getItem("MyGifs")) {
                      const myCurrentGifs = JSON.parse(
                        localStorage.getItem("MyGifs")
                      );
                      myCurrentGifs.push(myGif);
                      localStorage.setItem(
                        "MyGifs",
                        JSON.stringify(myCurrentGifs)
                      );
                    } else {
                      localStorage.setItem("MyGifs", JSON.stringify([myGif]));
                    }

                    const id = JSON.parse(localStorage.getItem("MyGifs"));
                    const length = id.length;
                    const uploadGif = id[length - 1];

                    const key = "6eH8kp3hSurlCHG7I1wPwAg39rnlm9fq";
                    const idEndpoint = `https://api.giphy.com/v1/gifs/${uploadGif}?api_key=${key}`;

                    fetch(idEndpoint)
                      .then(function (response) {
                        return response.json();
                      })
                      .then(function (data) {
                        document.getElementById(
                          "guifoSubidoContainer"
                        ).style.display = "flex";
                        document.getElementById(
                          "precapturaContainer"
                        ).style.display = "none";
                        document.getElementById(
                          "wrapperMisGifosSection"
                        ).style.display = "block";
                        document.getElementById(
                          "crearGifosGifsContainer"
                        ).innerHTML = "";
                        saveGifInLocalStorage(data);
                        previewGif(data);
                        putGifInMisGuifos();
                        //window.location.href = "misGifosSect.html";
                      })
                      .catch(function (error) {
                        return error;
                      });
                  })
                  .catch(function (error) {
                    return error;
                  });
              });
          });
          document.getElementById("precaptura").style.display = "none";
          document.getElementById("gifRecorded").style.display = "block";
          document.getElementById("listoButton").style.display = "none";
          document.getElementById("subirGuifoButton").style.display = "inline";
          document.getElementById("repetirCapturaButton").style.display =
            "inline";
          document.getElementById("recordingImg").style.display = "none";
          document.getElementById("closePrecaptura").style.display = "none";
        });

        closePrecaptura.addEventListener("click", function () {
          capturarButton.style.display = "inline";
          listoButton.style.display = "none";
          document.getElementById("cameraImg").style.display = "inline";
          document.getElementById("recordingImg").style.display = "none";
        });

        document
          .getElementById("repetirCapturaButton")
          .addEventListener("click", function () {
            document.getElementById("gifRecorded").style.display = "none";
            document.getElementById("precaptura").style.display = "block";
            document.getElementById("subirGuifoButton").style.display = "none";
            document.getElementById("repetirCapturaButton").style.display =
              "none";
            document.getElementById("capturarButton").style.display = "inline";
            document.getElementById("cameraImg").style.display = "inline";
            document.getElementById("centesimas").innerHTML = "00";
            document.getElementById("segundos").innerHTML = "00";
            document.getElementById("cronometro").style.visibility = "hidden";
            document.getElementById("precapturaTitle").innerHTML =
              "Un Chequeo Antes de Empezar";
            document.getElementById("closePrecaptura").style.display = "inline";
          });

        capturarButton.style.display = "none";
        listoButton.style.display = "inline";
        document.getElementById("cameraImg").style.display = "none";
        document.getElementById("recordingImg").style.display = "inline";
      });
    })
    .catch(function (err) {
      console.log(err.name + ": " + err.message);
    });
});

const closePrecaptura = document.getElementById("closePrecaptura");
closePrecaptura.addEventListener("click", function () {
  precapturaContainer.style.display = "none";
  crearGuifosWindow.style.display = "flex";
  contenedorMisGuifos.style.display = "flex";
  MisGuifosTitleContainer.style.display = "flex";
});

const capturarButton = document.getElementById("capturarButton");

capturarButton.addEventListener("click", function () {
  document.getElementById("cronometro").style.visibility = "visible";
  document.getElementById("precapturaTitle").innerHTML = "Capturando Tu Guifo";

  var segundos = 0;
  var centesimas = 0;

  var segundosSpan = document.getElementById("segundos");
  var centesimasSpan = document.getElementById("centesimas");

  const timer = setInterval(function () {
    if (centesimas === 99) {
      centesimas = 0;
      segundos = segundos + 1;
      if (segundos < 10) {
        segundosSpan.innerHTML = "0" + segundos;
      } else {
        segundosSpan.innerHTML = segundos;
      }
    }
    centesimas = centesimas + 1;
    if (centesimas < 10) {
      centesimasSpan.innerHTML = "0" + centesimas;
    } else {
      centesimasSpan.innerHTML = centesimas;
    }
  }, 1);

  listoButton.addEventListener("click", function () {
    document.getElementById("precapturaTitle").innerHTML = "Vista Previa";

    clearInterval(timer);
  });
});

/*document
  .getElementById("guifoSubidoListoButton")
  .addEventListener("click", function () {
    document.getElementById("guifosubidoContainer").style.display = "none";
    window.location.href = "misGifosSect.js";
  });*/
