import { isCamp } from "./utility.js";

export const validateProduct = (product = "") => {
  if (!isCamp(product)) return "Por favor ingrese un producto.";

  return true;
};
