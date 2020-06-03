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
        capturarButton.innerHTML = "Listo";
        capturarButton.setAttribute("class", "listoButton");
        document
          .getElementById("cameraImg")
          .setAttribute("class", "recordingImg");
        document.getElementById("cameraImg").src =
          "./gifOS_UI/assets/recording.svg";
      });
      capturarButton.addEventListener("click", function () {
        var horas = 0;
        var minutos = 0;
        var segundos = 0;
        var centesimas = 0;

        var h = document.getElementById("horas");
        var m = document.getElementById("minutos");
        var s = document.getElementById("segundos");
        var c = document.getElementById("centesimas");

        cronometro = setInterval(function () {
          if (centesimas === 100) {
            centesimas = 0;
            segundos = segundos + 1;
            s.innerHTML = segundos;
            if (segundos === 60) {
              segundos = 0;
              minutos = minutos + 1;
              m.innerHTML = minutos;
            }
            if (minutos === 60) {
              minutos = 0;
              horas = horas + 1;
              h.innerHTML = horas;
            }
          }
          centesimas = centesimas + 1;
          c.innerHTML = centesimas;
        }, 1);
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
