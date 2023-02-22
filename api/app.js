const express = require("express");
const productRouter = require("./routes/products");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json())
app.use("/", productRouter);

app.listen(5001, () => console.log("App listening on port 5001!"));

module.exports = app
