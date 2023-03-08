import { validateCode, validateDiscount } from "./validations.js";
const d = document;

const $guardarFactura = d.getElementById("guardar-factura"),
  $agregarArticulo = d.getElementById("agregar-articulo");

const $codigo = d.getElementById("codigo"),
  $producto = d.getElementById("producto"),
  $cantidad = d.getElementById("cantidad"),
  $precio = d.getElementById("precio"),
  $descuento = d.getElementById("descuento");

d.addEventListener("click", (e) => {
  if (e.target === $agregarArticulo) {
    e.preventDefault();
    validateDiscount($descuento.value);
    validateCode($codigo.value);
  }

  if (e.target === $guardarFactura) {
    e.preventDefault();
    console.log($cantidad.value, $producto, $precio);
  }
});
