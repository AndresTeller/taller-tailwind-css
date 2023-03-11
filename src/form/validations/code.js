import { isCamp } from "./utility.js";

export const validateCode = (codigo = "") => {
  if (!isCamp(codigo)) return "Por favor ingrese un código.";

  const { yearValid, monthValid, letterValid, lengthValid, digitsValid } =
    validCode;
  const { year, month, letter, digits } = getCode(codigo);

  if (codigo.length !== lengthValid)
    return `El código debe contener 11 caracteres`;

  if (!yearValid.includes(year))
    return `Los primeros 4 caracteres deben contener años entre ${
      yearValid[0]
    } y ${yearValid.slice(-1)}`;

  if (!monthValid.includes(month))
    return `Los caracteres 5 y 6 deben contener un mes de dos dígitos y estar entre 01 a 12.`;

  if (letter !== letterValid)
    return `El caracter 7 debe contener la letra V en mayúsculas.`;

  if (!digitsValid.test(digits))
    return `Sólo se aceptan números en los últimos 4 caracteres.`;

  return true;
};

const validCode = {
  yearValid: ["2020", "2021", "2022", "2023"],
  monthValid: [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ],
  lengthValid: 11,
  letterValid: "V",
  digitsValid: /^\d{4}$/,
};

const getCode = (code = "") => {
  return {
    year: code.substring(0, 4),
    month: code.substring(4, 6),
    letter: code.charAt(6),
    digits: code.substring(7, 11),
  };
};
