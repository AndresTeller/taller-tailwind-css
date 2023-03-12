const $product = document.getElementById("producto");

export const validateProduct = (product = `${$product[0].textContent}`) => {
  if (product === $product[0].textContent) return "Por favor ingrese un producto.";

  return true;
};
