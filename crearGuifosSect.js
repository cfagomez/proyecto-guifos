const crearGuifosButton = document.getElementById("crearGuifosButton");
crearGuifosButton.addEventListener("click", function () {
  document.getElementById("itemsContainer").style.visibility = "hidden";
  document.getElementById("buscadorSectionContainer").style.display = "none";
  document.getElementById("sugerenciasContainer").style.display = "none";
  document.getElementById("tendenciasSectionContainer").style.display = "none";
  document.getElementById("crearGuifosWindow").style.display = "flex";
});
