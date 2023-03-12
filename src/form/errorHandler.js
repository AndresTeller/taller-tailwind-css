import { validations } from "./validations/validations.js";

export const getErrores = (codigo, producto, cantidad, precio, descuento) => {
  let codeError = validations.validateCode(codigo),
    productoError = validations.validateProduct(producto),
    cantidadError = validations.validateQuantity(cantidad),
    precioError = validations.validatePrice(precio),
    descuentoError = validations.validateDiscount(descuento);
  
  const errores = [codeError, productoError, cantidadError, precioError, descuentoError];
  return errores;
};

export const messageError = (errores = [], contenedor) => {
  for (let i = 0; i < errores.length; i++) {
    if (errores[i] !== true) {
      contenedor.classList.remove("hidden");
      contenedor.innerHTML = `<p class = "text-red-600"> ${errores[i]} </p>`;
      return true;
    }
  }
  return false;
};
