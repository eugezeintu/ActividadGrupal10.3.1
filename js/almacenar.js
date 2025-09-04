// --- Función para obtener la lista desde localStorage ---
function obtenerLista() {
  let listaGuardada = localStorage.getItem("laLista");
  return listaGuardada ? JSON.parse(listaGuardada) : [];
}

// --- Función para guardar lista en localStorage ---
function guardarLista(lista) {
  localStorage.setItem("laLista", JSON.stringify(lista));
}

// --- Función para mostrar lista en la página ---
function mostrarLista() {
  let lista = obtenerLista();
  let contenedor = document.getElementById("contenedor");
  contenedor.innerHTML = ""; // limpiar lista previa

  lista.forEach((item) => {
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = item;
    contenedor.appendChild(li);
  });
}

// --- Agregar nuevo ítem ---
document.getElementById("agregar").addEventListener("click", function () {
  let input = document.getElementById("item");
  let valor = input.value.trim();

  if (valor !== "") {
    let lista = obtenerLista();
    lista.push(valor);        // agregar ítem
    guardarLista(lista);      // actualizar storage
    mostrarLista();           // refrescar vista
    input.value = "";         // limpiar campo
  }
});

// --- Limpiar lista ---
document.getElementById("limpiar").addEventListener("click", function () {
  localStorage.removeItem("laLista"); // eliminar del storage
  mostrarLista();                     // refrescar vista
});

// --- Mostrar lista al cargar la página ---
document.addEventListener("DOMContentLoaded", mostrarLista);
