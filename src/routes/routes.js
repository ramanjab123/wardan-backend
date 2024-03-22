const { loginController } = require("../controllers/loginController");
const express = require('express');
const cors = require('cors');
const { productsController, categoryController, productController, addToCartController, getCartDetails } = require("../controllers/productsController");

const router = express.Router();
// Enable CORS for this specific route
router.use(cors());

router.post('/login', loginController)
router.get('/products', productsController)
router.get('/products/:category', categoryController)
router.get('/products/:category/:product', productController)
router.post('/add-to-cart', addToCartController)
router.get('/view-cart/:customerId', getCartDetails)
module.exports = router;