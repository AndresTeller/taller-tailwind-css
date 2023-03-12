import { validations } from "./validations/validations.js";

const d = document;
const $guardarFactura = d.getElementById("guardar-factura"),
  $agregarArticulo = d.getElementById("agregar-articulo");

const $codigo = d.getElementById("codigo"),
  $producto = d.getElementById("producto"),
  $cantidad = d.getElementById("cantidad"),
  $precio = d.getElementById("precio"),
  $descuento = d.getElementById("descuento"),
  $contenedorError = d.getElementById("contenedor-error"),
  $tablaProductos = d.getElementById("tabla-productos");

let subtotal,
  valorDescuento,
  total,
  productos = [];

const getFacturas = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/facturas");
    if (!response.ok)
      throw { status: response.status, statusText: response.statusText };
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.status);
  }
};

const createFactura = async () => {
  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      codigo: $codigo.value,
      articulo: $producto.value,
      cantidad: $cantidad.value,
      precio: $precio.value,
      subtotal: subtotal,
      porcentaje_descuento: $descuento.value,
      valor_descuento: valorDescuento,
      total: total,
    }),
  };
  try {
    const response = await fetch("http://localhost:5000/api/facturas", options);
    if (!response.ok)
      throw { status: response.status, statusText: response.statusText };
    const json = await response.json();
    console.log(json);
  } catch (error) {
    const message = error.statusText || "Ha ocurrido un error.";
    console.log(`Error ${error.status}: ${message}`);
  }
};

const messageError = (errores = []) => {
  for (let i = 0; i < errores.length; i++) {
    if (errores[i] !== true) {
      $contenedorError.classList.remove("hidden");
      $contenedorError.innerHTML = `<p class = "text-red-600"> ${errores[i]} </p>`;
      return true;
    }
  }
  return false;
};

d.addEventListener("click", (e) => {
  if (e.target === $agregarArticulo) {
    e.preventDefault();
    let codeError = validations.validateCode($codigo.value),
      productoError = validations.validateProduct($producto.value),
      cantidadError = validations.validateQuantity($cantidad.value),
      precioError = validations.validatePrice($precio.value),
      descuentoError = validations.validateDiscount($descuento.value),
      errores = [
        codeError,
        productoError,
        cantidadError,
        precioError,
        descuentoError,
      ];

    messageError(errores);

    if (e.target === $guardarFactura) {
      e.preventDefault();
      subtotal = parseInt($cantidad.value) * parseFloat($precio.value);
      valorDescuento = subtotal * parseFloat($descuento.value / 100);
      total = subtotal - valorDescuento;
      createFactura();
    }
  }
});
