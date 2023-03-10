export const validateCamp = (camp) => {
  console.log(camp);
  if (!camp) return alert("Por favor rellene todos los campos.");
};

export const validateNumber = (number = 0) => {
  if (isNaN(number)) return alert("Solo se aceptan números");
};

export const validatePositiveNumber = (number = 0) => {
  if (number < 0) return alert("Solo se aceptan números positivos.");
};
