const { createProduct } = require("../models/Product");
const { getProduct } = require("../models/Product");

//create the new product
module.exports = create = async (req, res) => {
  const id = await createProduct(req.body);
  console.log(id);
  res.status(200).json({ id });
};

//get product by id
module.exports = get = async (req, res) => {
  const product = await getProduct(req.params.id);
  res.status(200).json(product);
};
