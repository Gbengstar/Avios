import db from "../models/index.js";

// Create main model

const Product = db.products;
const Variant = db.variants;

// create product

const createProduct = async (req, res) => {
  const info = {
    product_name: req.body.product_name,
    product_description: req.body.product_description,
    product_varieties: req.body.product_varieties,
  };
  const product = await Product.create(info);

  res.status(200).json({ product });
  console.log(product);
};

// get all products

const getProducts = async (req, res) => {
  const products = Product.findAll({
    attributes: [product_name, product_description],
  });
  res.status(200).json({ products });
  console.log(products);
};

// update product

const updateProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.update(req.body, { where: { id: id } });
};

// delete product
const deleteProduct = async (req, res) => {
  const id = req.params.id;
  await destroy({ where: { id: id } });
};
const handler = { createProduct, getProducts, updateProduct, deleteProduct };
export default handler;
