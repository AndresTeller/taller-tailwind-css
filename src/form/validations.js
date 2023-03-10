import { validateCode } from "./validations/code.js";
import { validateDiscount } from "./validations/discount.js";
import { validatePrice } from "./validations/price.js";
import { validateProduct } from "./validations/product.js";
import { validateQuantity } from "./validations/quantity.js";

export const validations = {
  validateCode,
  validateProduct,
  validateQuantity,
  validatePrice,
  validateDiscount,
};
