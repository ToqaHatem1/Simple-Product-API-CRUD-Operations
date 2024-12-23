const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

const productsFilePath = path.join(__dirname, '../data/products.json');

const readProducts = () => {
    const data = fs.readFileSync(productsFilePath, 'utf8');
    return JSON.parse(data);
};

const writeProducts = (products) => {
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
};

// Get all products
const getAllProducts = (req, res) => {
    const products = readProducts();
    res.json(products);
};

// Get product by ID
const getProduct = (req, res) => {
    const productId = +req.params.productId;
    const products = readProducts();
    const product = products.find((product) => product.id === productId);
    if (!product) {
        return res.status(404).json({ msg: "product not found" });
    }
    res.json(product);
};

// Create new product
const addProduct = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }

    const products = readProducts();
    const product = { id: products.length + 1, ...req.body };
    products.push(product);
    writeProducts(products);

    res.status(201).json(product);
};

// Update product by ID
const updateProduct = (req, res) => {
    const productId = +req.params.productId;
    const products = readProducts();
    let product = products.find((product) => product.id === productId);
    if (!product) {
        return res.status(404).json({ msg: "product not found" });
    }

    product = { ...product, ...req.body };
    const updatedProducts = products.map((p) => (p.id === productId ? product : p));
    writeProducts(updatedProducts);

    res.status(200).json(product);
};

// Delete product by ID
const deleteProduct = (req, res) => {
    const productId = +req.params.productId;
    const products = readProducts();
    const updatedProducts = products.filter((product) => product.id !== productId);
    writeProducts(updatedProducts);

    res.status(200).json({ success: true });
};

module.exports = {
    getAllProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct,
};
