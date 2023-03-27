const { Router } = require("express");
const {
  getFacturas,
  getFactura,
  createFactura,
} = require("../controllers/facturas.controller.js");

const router = Router(),
  ROUTE = "/api/facturas/",
  ROUTE_CODIGO = "/api/facturas/:codigo";

router.options(ROUTE, (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.sendStatus(200);
});

router.get(ROUTE, getFacturas);

router.get(ROUTE_CODIGO, getFactura);

router.post(ROUTE, createFactura);

module.exports = router;
