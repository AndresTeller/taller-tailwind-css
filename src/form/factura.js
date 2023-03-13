export const getFacturas = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/facturas");
    if (!response.ok)
      throw { status: response.status, statusText: response.statusText };
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.status);
  }
};

export const createFactura = async (products) => {
  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(products),
  };
  try {
    const response = await fetch("http://localhost:5000/api/facturas", options);
    const json = await response.json();
    if (json.success === false) return console.log(json.message);

    if (!response.ok)
      throw { status: response.status, statusText: response.statusText };
  } catch (error) {
    const message = error.statusText || "Ha ocurrido un error.";
    console.log(`Error ${error.status}: ${message}.
    ${error.description}`);
  }
};
