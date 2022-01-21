const express = require("express");
const app = express();
const ProductRoutes = require("./routes/Product");

require("./loaders/Redis");
require("dotenv").config();
app.use(express.json());

//Routers
app.use("/products", ProductRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
