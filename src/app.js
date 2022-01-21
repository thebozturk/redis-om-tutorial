const express = require("express");
const app = express();
require("./loaders/Redis");

require("dotenv").config();
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
