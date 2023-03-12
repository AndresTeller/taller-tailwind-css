import { getErrores, messageError } from "./errorHandler.js";
import { createFactura } from "./factura.js";
import { getProduct } from "./producto.js";
import { generarTabla } from "./tablaProducto.js";

const d = document;
const $guardarFactura = d.getElementById("guardar-factura"),
  $agregarArticulo = d.getElementById("agregar-articulo");

const $codigo = d.getElementById("codigo"),
  $producto = d.getElementById("producto"),
  $cantidad = d.getElementById("cantidad"),
  $precio = d.getElementById("precio"),
  $porcentajeDescuento = d.getElementById("descuento"),
  $contenedorError = d.getElementById("contenedor-error"),
  $tablaProductosCuerpo = d.getElementById("tabla-productos-cuerpo"),
  $tablaProductos = d.getElementById("tabla-productos");

const products = [];

d.addEventListener("click", (e) => {
  if (e.target === $agregarArticulo) {
    e.preventDefault();
    const errores = getErrores(
      $codigo.value,
      $producto.value,
      $cantidad.value,
      $precio.value,
      $porcentajeDescuento.value
    );
    if (!messageError(errores, $contenedorError)) {
      const product = getProduct(
        $codigo.value,
        $producto.value,
        $cantidad.value,
        $precio.value,
        $porcentajeDescuento.value
      );
      products.push(product);
      generarTabla($tablaProductos, $tablaProductosCuerpo, product);
    }
  }

  if (e.target === $guardarFactura) {
    e.preventDefault();
    createFactura(
      $codigo.value,
      $producto.value,
      $cantidad.value,
      $precio.value,
      $porcentajeDescuento.value
    );
  }
});
