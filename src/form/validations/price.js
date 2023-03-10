import { validateCamp, validateNumber, validatePositiveNumber } from "./utility.js";

export const validatePrice = (price) => {
  validateCamp(price);
  validateNumber(price);
  validatePositiveNumber(price);
};