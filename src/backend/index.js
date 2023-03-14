const express = require("express");
const facturasRoutes = require("./routes/facturas.routes.js");
const cors = require("cors");

const app = express(),
  PORT = 5000;

app.use(express.json());

app.use(cors());

app.use(facturasRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found.",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
