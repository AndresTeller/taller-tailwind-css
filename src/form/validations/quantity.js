import { isCamp, isNumber, isPositiveNumber } from "./utility.js";

const MAX_QUANTITY = 30;

export const validateQuantity = (quantity = 0) => {
  if (!isCamp(quantity)) return "Por favor ingrese una cantidad.";

  if (!isNumber(quantity)) return "Por favor ingrese solo números.";

  if (!isPositiveNumber(quantity))
    return "Por favor, ingrese sólo números positivos.";

  if (quantity > MAX_QUANTITY)
    return `La cantidad máxima de productos a escoger es ${MAX_QUANTITY}`;

  return true;
};
