import { getSubtotal, getTotal, getValorDescuento } from "./utility.js";

export const getProduct = (
  codigo,
  producto,
  cantidad,
  precio,
  porcentajeDescuento
) => {
  let subtotal = getSubtotal(cantidad, precio),
    valorDescuento = getValorDescuento(subtotal, porcentajeDescuento),
    total = getTotal(subtotal, valorDescuento);

  return {
    codigo: codigo,
    articulo: producto,
    cantidad: cantidad,
    precio: precio,
    subtotal: subtotal,
    porcentaje_descuento: porcentajeDescuento,
    valor_descuento: valorDescuento,
    total: total,
  };
};
