import { isCamp, isNumber } from "./utility.js";

const minDiscount = 0,
  maxDiscount = 50;

export const validateDiscount = (discount = 0) => {
  if (!isCamp(discount)) return "Por favor rellene el campo de descuento.";

  if (!isNumber(discount)) return "Por favor ingrese solo números.";

  if (discount < minDiscount)
    return `El descuento mínimo válido es ${minDiscount}`;

  if (discount > maxDiscount)
    return `El descuento máximo válido es ${maxDiscount}%`;
  
  return true;
};
