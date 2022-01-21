const { Client, Entity, Repository, Schema } = require("redis-om");
const client = require("../loaders/Redis");

class Product extends Entity {}

const schema = new Schema(Product, {
  name: { type: "string" },
  price: { type: "number" },
  description: { type: "string" },
});

module.exports.createProduct = async function createProduct(data) {
  const repository = new Repository(schema, client);
  const product = repository.createEntity(data);
  const id = await repository.save(product);
  return id;
};

module.exports.getProduct = async function getProduct(id) {
  const repository = new Repository(schema, client);
  const product = await repository.fetch(id);
  return product;
};
