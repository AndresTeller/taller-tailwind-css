import { isCamp, isNumber, isPositiveNumber } from "./utility.js";

export const validatePrice = (price) => {
  if (!isCamp(price)) return "Por favor ingrese un precio.";

  if (!isNumber(price)) return "Por favor ingrese un número.";

  if (!isPositiveNumber(price)) return "Por favor ingrese un número positivo.";

  return true;
};
