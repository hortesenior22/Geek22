let i = 0;

fetch('../json/productos.json')  // o URL de una API
  .then(response => response.json())
  .then(data => {
    const contenedor = document.getElementById('products-container');

     // Convertir el objeto a un array de productos
    const productos = Object.values(data);
    
    // Mapear datos a HTML (escapando strings para evitar XSS)
    const html = productos.map(producto => `
        <div class="producto">
         <img src="${producto.imagen}" alt="${producto.nombre}">
         <div class="product-data">
            <h2>${producto.nombre}</h2>
            <h3>${producto.subnombre}</h3>
            <p class="description">${producto.descripcion}</p>
            <p class="price">${producto.precio}</p>
         </div>
       </div>
    `).join('');

    // Insertar de una sola vez en el DOM (eficiente)
    contenedor.insertAdjacentHTML('beforeend', html);
  })
  .catch(error => console.error("Error:", error));

// Función básica para escapar HTML (protege contra XSS)
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}