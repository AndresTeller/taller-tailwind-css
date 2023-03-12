export const getSubtotal = (cantidad, precio) => {
  return parseInt(cantidad) * parseFloat(precio);
};

export const getValorDescuento = (subtotal, porcentajeDescuento) => {
  return subtotal * parseFloat(porcentajeDescuento / 100);
};

export const getTotal = (subtotal, valorDescuento) => {
  return subtotal - valorDescuento;
};