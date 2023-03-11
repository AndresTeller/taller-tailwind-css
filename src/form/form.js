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
    console.log(validations.validateCode($codigo.value));
    console.log(validations.validateProduct($producto.value));
    console.log(validations.validateQuantity($cantidad.value));
    console.log(validations.validatePrice($precio.value));
    console.log(validations.validateDiscount($descuento.value));
    console.log("-------------------------------------");
  }

  if (e.target === $guardarFactura) {
    e.preventDefault();
    console.log($cantidad.value, $producto, $precio);
  }
});
