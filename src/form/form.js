import { validations } from "./validations.js";

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
    validations.validateCode($codigo.value);
    validations.validateDiscount($descuento.value);
    validations.validatePrice($precio.value);
    validations.validateProduct($producto.value);
    validations.validateQuantity($cantidad.value);
  }

  if (e.target === $guardarFactura) {
    e.preventDefault();
    console.log($cantidad.value, $producto, $precio);
  }
});
