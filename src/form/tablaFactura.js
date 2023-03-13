import { getFacturas } from "./factura.js";

const tablaProductosCuerpo = document.getElementById("tabla-productos-cuerpo"); ;
const mostrarTabla = async () => {
  let productos = await getFacturas();
  console.log("Aqui estoy");
  productos.data.forEach((producto) => {
    tablaProductosCuerpo.innerHTML += `
        <tr class="tabla-tr">
                <td class="px-6 py-4">
                    ${producto.articulo}
                </td>
                <td class="px-6 py-4">
                    ${producto.precio}
                </td>
                <td class="px-6 py-4">
                    ${producto.cantidad}
                </td>
                <td class="px-6 py-4">
                    ${producto.total}
                </td>
            </tr>
      `;
  });
};

window.onload = mostrarTabla();
