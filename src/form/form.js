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
  $contenedorError1 = d.getElementById("contenedor-error1"),
  $tablaProductosCuerpo = d.getElementById("tabla-productos-cuerpo"),
  $tablaProductos = d.getElementById("tabla-productos"),
  $formulario = d.getElementById("formulario"),
  $contenedorError2 = d.getElementById("contenedor-error2");

let products = [];

d.addEventListener("click", async (e) => {
  if (e.target === $agregarArticulo) {
    e.preventDefault();
    const errores = getErrores(
      $codigo.value,
      $producto.value,
      $cantidad.value,
      $precio.value,
      $porcentajeDescuento.value
    );
    if (!messageError(errores, $contenedorError1)) {
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
    createFactura(products);
    $formulario.reset();
    products = [];
    $contenedorError2.classList.remove("hidden");
    $contenedorError2.innerHTML = `<p class = ""> Se ha registrado correctamente </p>`;
    setTimeout(() => {
      $contenedorError2.classList.add("hidden");
    }, 2000);
  }
});
