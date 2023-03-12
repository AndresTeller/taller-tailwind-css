import { validateCode } from "./code.js";
import { validateDiscount } from "./discount.js";
import { validatePrice } from "./price.js";
import { validateProduct } from "./product.js";
import { validateQuantity } from "./quantity.js";

export const validations = {
  validateCode,
  validateProduct,
  validateQuantity,
  validatePrice,
  validateDiscount,
};
