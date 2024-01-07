const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const productsController = require("../controllers/products.js");

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get("/add-product", productsController.getAddproduct);

// /admin/add-product => POST
router.post("/add-product", productsController.postAddproduct);

exports.routes = router;
exports.products = products;

