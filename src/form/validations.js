//Validaciones descuento.
const minDiscount = 0,
  maxDiscount = 50;

export const validateDiscount = (discount = 0) => {
  if (isNaN(discount)) alert("Solo se aceptan números");

  if (discount < minDiscount)
    alert(`El descuento mínimo válido es ${minDiscount}`);

  if (discount > maxDiscount)
    alert(`El descuento máximo válido es ${maxDiscount}%`);
};


// Validaciones del código.
const yearValid = ["2020", "2021", "2022", "2023"],
  monthValid = [
    "01", "02", "03", "04",
    "05", "06", "07", "08",
    "09", "10", "11", "12",
  ],
  lengthValid = 11,
  letterValid = "V",
  digitsValid = /^\d{4}$/;

export const validateCode = (codigo = "") => {
  const year = codigo.substring(0, 4),
    month = codigo.substring(4, 6),
    letter = codigo.charAt(6),
    digits = codigo.substring(7, 11);

  if (codigo.length !== lengthValid)
    return alert(`El código debe contener 11 caracteres`);

  if (!yearValid.includes(year))
    return alert(
      `Los primeros 4 caracteres deben contener años entre ${
        yearValid[1]
      } y ${yearValid.slice(-1)}`
    );

  if (!monthValid.includes(month))
    return alert(
      `Los caracteres 5 y 6 deben contener un mes de dos dígitos y estar entre 01 a 12.`
    );

  if (letter !== letterValid)
    return alert(`El caracter 7 debe contener la letra V en mayúsculas.`);

  if (!digitsValid.test(digits))
    return alert(`Sólo se aceptan números en los últimos 4 caracteres.`);
};

