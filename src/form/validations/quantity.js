import { isCamp, isNumber, isPositiveNumber } from "./utility.js";

export const validateQuantity = (quantity = 0) => {
  if (!isCamp(quantity)) return "Por favor ingrese una cantidad.";

  if (!isNumber(quantity)) return "Por favor ingrese solo números.";

  if (!isPositiveNumber(quantity))
    return "Por favor, ingrese sólo números positivos.";

  return true;
};
