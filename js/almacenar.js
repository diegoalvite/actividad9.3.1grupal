const boton = document.getElementById("agregar");
const lista = document.getElementById("contenedor");
const limpiar = document.getElementById("limpiar");

const arrayItems = JSON.parse(localStorage.getItem("data")) || [];

cargarElementos();

function cargarElementos() {
  lista.innerHTML = "";
  for (let i = 0; i < arrayItems.length; i++) {
    lista.innerHTML += `<p>${arrayItems[i]}</p>`;
  }
}

boton.addEventListener("click", () => {
  const inputValue = document.getElementById("item").value.trim(); // Eliminar espacios en blanco al inicio y final
  if (inputValue !== "") {
    arrayItems.push(inputValue);
    const jsonArrayItems = JSON.stringify(arrayItems);
    localStorage.setItem("data", jsonArrayItems);
    cargarElementos();
    document.getElementById("item").value = "";
  }
});

limpiar.addEventListener("click", () => {
  localStorage.removeItem("data");
  lista.innerHTML = "";
});
