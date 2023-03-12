let indice = 1;

export const generarTabla = (tablaProductos, tablaProductosCuerpo, product) => {
   tablaProductos.classList.remove("hidden");
  tablaProductosCuerpo.innerHTML += `
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
} 