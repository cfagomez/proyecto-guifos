const comenzarButton = document.getElementById("comenzarButton");
comenzarButton.addEventListener("click", function () {
  const crearGuifosWindow = document.getElementById("crearGuifosWindow");
  crearGuifosWindow.style.display = "none";
});
comenzarButton.addEventListener("click", function () {
  const contenedorMisGuifos = document.getElementById("contenedorMisGuifos");
  contenedorMisGuifos.style.display = "none";
});
comenzarButton.addEventListener("click", function () {
  const MisGuifosTitleContainer = document.getElementById(
    "MisGuifosTitleContainer"
  );
  MisGuifosTitleContainer.style.display = "none";
});
comenzarButton.addEventListener("click", function () {
  const precapturaContainer = document.getElementById("precapturaContainer");
  precapturaContainer.style.display = "flex";
});
comenzarButton.addEventListener("click", function () {
  const constraints = { audio: false, video: { width: 832, height: 434 } };
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
          width: 360,
          hidden: 240,
        });

        recorder.startRecording();

        listoButton.addEventListener("click", function () {
          recorder.stopRecording(function () {
            const blob = recorder.blob;
            const url = URL.createObjectURL(blob);
            document.getElementById("precaptura").src = url;
          });
        });

        closePrecaptura.addEventListener("click", function () {
          recorder.stopRecording();
          capturarButton.style.display = "inline";
          listoButton.style.display = "none";
          document.getElementById("cameraImg").style.display = "inline";
          document.getElementById("recordingImg").style.display = "none";
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
  var segundos = 0;
  var centesimas = 0;

  var segundosSpan = document.getElementById("segundos");
  var centesimasSpan = document.getElementById("centesimas");

  setInterval(function () {
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
  }, 10);
});
