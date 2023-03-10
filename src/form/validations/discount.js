import { validateCamp, validateNumber } from "./utility.js";

const minDiscount = 0,
  maxDiscount = 50;

export const validateDiscount = (discount = 0) => {
  validateCamp(discount);
  validateNumber(discount);

  if (discount < minDiscount)
    return alert(`El descuento mínimo válido es ${minDiscount}`);

  if (discount > maxDiscount)
    return alert(`El descuento máximo válido es ${maxDiscount}%`);
};
