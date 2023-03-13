let indice = 1;

export const generarTabla = (tablaProductos, tablaProductosCuerpo, product) => {
  tablaProductos.classList.remove("hidden");
  tablaProductosCuerpo.innerHTML += `
        <tr class="tabla-tr">
                <th scope="row" class="">
                    ${indice++}
                </th>
                <td class="px-6 py-4">
                    ${product.articulo}
                </td>
                <td class="px-6 py-4">
                    ${product.cantidad}
                </td>
                <td class="px-6 py-4">
                    ${product.precio}
                </td>
                <td class="px-6 py-4">
                    ${product.subtotal}
                </td>
                <td class="px-6 py-4">
                    ${product.porcentaje_descuento}
                </td>
                <td class="px-6 py-4">
                    ${product.valor_descuento}
                </td>
                <td class="px-6 py-4">
                    ${product.total}
                </td>
            </tr>
      `;
};
