let agregar = document.getElementById("Agregar");
let bustext = document.getElementById("BuscarText");
let buscar = document.getElementById("Buscar");
let fecha = document.getElementById("FechaTexto");
let titulo = document.getElementById("TituloR");
let categor = document.getElementById("Categoria");
let pasos = document.getElementById("Pasos");
let ingredients = document.getElementById("Ingredientes");
let imagen = document.getElementById("Imagen");
let modal = document.getElementById("ModalOverlay");
let cerrar = document.getElementById("CerrarModal");
let guardar = document.getElementById("GuardarReceta");
let paginaActual = 0;
let listaFiltrada = [];
let filtroActivo = false;
let ac = document.getElementById("AC");
let df = document.getElementById("DF");
let gi = document.getElementById("GI");
let jl = document.getElementById("JL");
let mñ = document.getElementById("MÑ");
let oq = document.getElementById("OQ");
let rt = document.getElementById("RT");
let uw = document.getElementById("UW");
let xz = document.getElementById("XZ");

let listaRecetas = [
  {
    titulo: "Enchiladas Verdes",
    Dificultad: "Fácil",
    tiempo: "45min",
    cocción: "35min",
    pasos: "Cuece la pechuga de pollo en ague hirviendo con media cebolla y salpimienta al gusto.<br><br>Cuando el pollo esté cocido (25 min aproximadamente), déjalo enfriar, desmenúzalo y reserva. <br><br>Salsa: En una olla con agua hirviendo cuece los tomates verdes, media cebolla, el diente de ajo y los chiles serranos por 8 minutos.<br><br>Licua con el cilatro, agrega sal y pimienta al gusto y reserva.<br><br>En un sartén caliente agrega dos cucharadas de aceite y pasa por este ambos lados de las tortillas. Inmediatamente rellena las tortillas con el pollo deshebrado y arma los tacos que desees para colocarlos boca abajo en un plato. Luego baña los tacos con la salsa verde y adorna con queso panela, crema y cebolla",
    ingredientes: ["Pollo Pechuga", "Cebolla Blanca", "Chile Serrano", "Tomate Verde", "Diente de Ajo", "Cilantro", "Queso Panela", "Tortilla de Maíz", "Sal al gusto", "Crema al gusto"],
    imagen: "https://cdn7.kiwilimon.com/recetaimagen/36938/1200x600/50874.jpg.webp"
  }
];

function mostrarReceta(index, lista = listaRecetas) {
  let receta = lista[index];
  titulo.innerHTML = "<p>" + receta.titulo + "</p>";
  categor.innerHTML = "<p>Dificultad<br>" + receta.dificultad + "</p>" + "<p>TiempoTotal:<br>" + receta.tiempo + "</p>" + "<p>Cocción:<br>" + receta.coccion + "</p>";
  pasos.innerHTML = "<p>" + receta.pasos + "</p>";
  imagen.src = receta.imagen;
  ingredients.innerHTML = "<ul>" + receta.ingredientes.map(i => `<li>${i}</li>`).join("") + "</ul>";
  document.getElementById("PaginaActual").innerText = (index + 1) + " / " + lista.length;
}

function filtrarPorLetras(letras){
    listaFiltrada = listaRecetas.filter(r => letras.includes(r.titulo[0].toUpperCase()));

    if (listaFiltrada.length > 0) {
    filtroActivo = true;
    paginaActual = 0;
    mostrarReceta(0, listaFiltrada);
  } else {
    alert("No hay recetas con esas iniciales");
  }
}
ac.addEventListener("click", () => filtrarPorLetras(["A", "B", "C"]));
df.addEventListener("click", () => filtrarPorLetras(["D", "E", "F"]));
gi.addEventListener("click", () => filtrarPorLetras(["G", "H", "I"]));
jl.addEventListener("click", () => filtrarPorLetras(["J", "K", "L"]));
mñ.addEventListener("click", () => filtrarPorLetras(["M", "N", "Ñ"]));
oq.addEventListener("click", () => filtrarPorLetras(["O", "P", "Q"]));
rt.addEventListener("click", () => filtrarPorLetras(["R", "S", "T"]));
uw.addEventListener("click", () => filtrarPorLetras(["U", "V", "W"]));
xz.addEventListener("click", () => filtrarPorLetras(["X", "Y", "Z"]));


document.getElementById("Siguiente").addEventListener("click", () => {
    let lista = filtroActivo ? listaFiltrada : listaRecetas;
  if (paginaActual < lista.length - 1) {
    paginaActual++;
    mostrarReceta(paginaActual, lista);
  }
});

document.getElementById("Anterior").addEventListener("click", () => {
    let lista = filtroActivo ? listaFiltrada : listaRecetas;
    if (paginaActual > 0) {
    paginaActual--;
    mostrarReceta(paginaActual, lista);
  }
});

guardar.addEventListener("click", () => {
  let lineas = document.getElementById("InputIngredientes").value.split("\n").filter(l => l.trim() !== "");
  let nuevaReceta = {
    titulo: document.getElementById("InputTitulo").value,
    dificultad: document.getElementById("InputDificultad").value,
    tiempo: document.getElementById("InputTiempo").value,
    coccion: document.getElementById("InputCoccion").value,
    categoria: document.getElementById("InputCategoria").value,
    pasos: document.getElementById("InputPasos").value,
    imagen: document.getElementById("InputImagen").value,
    ingredientes: lineas
  };

   listaRecetas.push(nuevaReceta);  
  paginaActual = listaRecetas.length - 1;  
  filtroActivo = false;
  mostrarReceta(paginaActual);
  modal.classList.remove("activo");
});

agregar.addEventListener("click", () => {
    modal.classList.add("activo");
});

cerrar.addEventListener("click", () =>{
    modal.classList.remove("activo");
});



