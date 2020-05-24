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
capturarButton.addEventListener("click", function (stream) {
  const recorder = RecordRTC(stream, {
    type: "gif",
    frameRate: 1,
    quality: 10,
    width: 360,
    hidden: 240,
  });
  recorder.startRecording();
});
