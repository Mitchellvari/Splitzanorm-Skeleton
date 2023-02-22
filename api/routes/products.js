var express = require("express");
var router = express.Router();
const stripe = require("stripe")(
  "sk_test_51LLga0Lh8BBWwJ2do9sDSkHrSDO2nMTXkWVGEpK6CutJH84yLKSaZGNoNvziqhV2Dls1nxdPVoyh66QH6FDVKv4I00vciEpFP7"
);
const YOUR_DOMAIN = "http://localhost:3000";

router.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: req.body.priceId,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: YOUR_DOMAIN,
    cancel_url: YOUR_DOMAIN,
  });

  res.json({ url: session.url });
});

router.get("/products", async function (req, res, next) {
  const products = await stripe.products.list({
    limit: 999,
  });
  const prices = await stripe.prices.list({
    limit: 999,
  });

  const productAndPrice = { products: products, prices: prices };
  const arr1 = productAndPrice.products.data;
  const arr2 = productAndPrice.prices.data;

  const output = arr1.map((el) => ({
    product: {
      ...el,
      price: arr2.find((x) => x.product === el.id).unit_amount,
    },
  }));
  res.status(200).send(output);
});

module.exports = router;
