var express = require("express");
const db = require("../db");
var router = express.Router();
const stripe = require("stripe")(
  "sk_test_51LLga0Lh8BBWwJ2do9sDSkHrSDO2nMTXkWVGEpK6CutJH84yLKSaZGNoNvziqhV2Dls1nxdPVoyh66QH6FDVKv4I00vciEpFP7"
);




router.get("/products", async function (req, res, next) {
const data = await db.query("SELECT * FROM products")
const output = data.rows
  res.status(200).send(output);
});

module.exports = router;
