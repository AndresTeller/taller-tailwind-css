import { getSubtotal, getTotal, getValorDescuento } from "./utility.js";

export const getFacturas = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/facturas");
    if (!response.ok)
      throw { status: response.status, statusText: response.statusText };
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.status);
  }
};

export const createFactura = async (
  codigo,
  producto,
  cantidad,
  precio,
  descuento,
) => {
  let subtotal = getSubtotal(cantidad, precio),
    valorDescuento = getValorDescuento(subtotal, descuento),
    total = getTotal(subtotal, valorDescuento);
  
  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      codigo: codigo,
      articulo: producto,
      cantidad: cantidad,
      precio: precio,
      subtotal: subtotal,
      porcentaje_descuento: descuento,
      valor_descuento: valorDescuento,
      total:  total,
    }),
  };
  try {
    const response = await fetch("http://localhost:5000/api/facturas", options);
    if (!response.ok)
      throw { status: response.status, statusText: response.statusText };
    const json = await response.json();
    console.log(json);
  } catch (error) {
    const message = error.statusText || "Ha ocurrido un error.";
    console.log(`Error ${error.status}: ${message}`);
  }
};
