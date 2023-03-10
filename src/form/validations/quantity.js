import {
  validateCamp,
  validateNumber,
  validatePositiveNumber,
} from "./utility.js";

export const validateQuantity = (quantity = 0) => {
  validateCamp(quantity);
  validateNumber(quantity);
  validatePositiveNumber(quantity);
};
