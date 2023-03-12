const { pool } = require("../db.js");

exports.getFacturas = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM factura");
    res.json({
      success: true,
      data: rows,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something goes wrong.",
    });
  }
};

exports.getFactura = async (req, res) => {
  try {
    const [rows] = await pool.query(`SELECT * FROM factura WHERE id = ?`, [
      req.params.id,
    ]);

    if (rows.length <= 0)
      return res.status(404).json({
        success: false,
        message: "La factura no ha sido encontrada.",
      });

    res.json({
      success: true,
      data: rows[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something goes wrong.",
    });
  }
};

exports.createFactura = async (req, res) => {
  try {
    const products = req.body;
    const newProducts = [];
    for (const product of products) {
      const {
        codigo,
        articulo,
        cantidad,
        precio,
        subtotal,
        porcentaje_descuento,
        valor_descuento,
        total,
      } = product;

      const [rows] = await pool.query(
        `INSERT INTO factura (codigo, articulo, cantidad, precio, subtotal, porcentaje_descuento, valor_descuento, total) VALUES (?,?,?,?,?,?,?,?)`,
        [
          codigo,
          articulo,
          cantidad,
          precio,
          subtotal,
          porcentaje_descuento,
          valor_descuento,
          total,
        ]
      );

      const newProduct = {
        id: rows.insertId,
        codigo,
        articulo,
        cantidad,
        precio,
        subtotal,
        porcentaje_descuento,
        valor_descuento,
        total,
      };

      newProducts.push(newProduct);
    }

    res.json(newProducts);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something goes wrong.",
    });
  }
};

// exports.createFactura = async (req, res) => {
//   try {
//     const {
//       codigo,
//       articulo,
//       cantidad,
//       precio,
//       subtotal,
//       porcentaje_descuento,
//       valor_descuento,
//       total,
//     } = req.body;

//     const [rows] = await pool.query(
//       `INSERT INTO factura (codigo, articulo, cantidad, precio, subtotal, porcentaje_descuento, valor_descuento, total) VALUES (?,?,?,?,?,?,?,?)`,
//       [
//         codigo,
//         articulo,
//         cantidad,
//         precio,
//         subtotal,
//         porcentaje_descuento,
//         valor_descuento,
//         total,
//       ]
//     );

//     res.json({
//       id: rows.insertId,
//       codigo,
//       articulo,
//       cantidad,
//       precio,
//       subtotal,
//       porcentaje_descuento,
//       valor_descuento,
//       total,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Something goes wrong.",
//     });
//   }
// };
