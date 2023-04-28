function generarMarcadores() {
  // Obtener todos los campos de goles
  const goles = document.querySelectorAll('input[type="number"]');

  // Generar números aleatorios entre 0 y 3 y asignarlos a los campos de goles
  goles.forEach((gol) => {
    gol.value = Math.floor(Math.random() * 4);
  });
}
