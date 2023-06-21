import { cargarJuegos } from "./main.js";
const URL = import.meta.env.VITE_API_URL;
const KEY = import.meta.env.VITE_API_KEY;
botonesFiltroEl.forEach((boton) => {
  boton.addEventListener("click", (ev) => {
    ev.preventDefault();

    const genre = ev.target.innerText.toLowerCase();
    const url = `${URL}games?page_size=40&page=1&genres=${genre}&key=${KEY}`;
    cargarJuegos(url);
  });
});

buscadorEl.forEach((buscador) => {
  buscador.addEventListener("keyup", (ev) => {
    if (ev.key === "Enter") {
      const url = `${URL}games?page_size=40&page=1&search=${ev.target.value}&key=${KEY}`;
      cargarJuegos(url);
      tituloSeccionEl.innerText = `Titulos relacionados a ${ev.target.value}`;
      retrocederEl.style.display = "none";
      avanzarEl.style.display = "none";
    }
  });
});

tituloLogo.addEventListener("click", (ev) => {
  ev.preventDefault();
  cargarJuegos();
  tituloSeccionEl.innerText = "Juegos";
});
