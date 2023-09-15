const express = require("express");
const productCtrl = require("../Controllers/productController");
const router = express.Router();

router.post("/add", productCtrl.addProduct);
router.get("/select", productCtrl.getAllProduct);

module.exports = router;
