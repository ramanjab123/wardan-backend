const { products } = require("../models/data/user_data")
const { Product, CartItem } = require('../models/data/schema');
exports.productsController = (req, res) => {
    res.status(200).json(products)
}
exports.categoryController = async (req, res) => {
    try {
        // Fetch products from the database based on the category parameter
        const productsData = await Product.find({ category: req.params.category });
        console.log("category", productsData);
        // Send the products data as a JSON response
        res.status(200).json(productsData);
    } catch (error) {
        // If an error occurs, send an error response
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
    // const productsData = products.products.filter((item, index) => {
    //     return item.category == req.params.category
    // })

    // res.status(200).json(productsData)
}
exports.productController = async (req, res) => {
    try {
        // Fetch product from the database based on the product and category parameters
        const productData = await Product.find({
            name: req.params.product,
            category: req.params.category
        });

        // If product data exists, send it as a JSON response
        if (productData.length > 0) {
            res.status(200).json(productData);
        } else {
            // If no product found, send a 404 Not Found response
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        // If an error occurs, send an error response
        console.error('Error fetching product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
exports.addToCartController = async (req, res) => {
    try {
        // Create a new CartItem instance based on the request body
        const cartItem = new CartItem({
            customerId: req.body.customerId,
            productId: req.body.id, // Assuming productId corresponds to the product id
            quantity: req.body.quantity,
            price: req.body.price,
        });

        // Save the cart item to the database
        await cartItem.save();

        // Send a success response with the updated cart
        res.status(200).json({ message: 'Cart item added successfully', cart: cartItem });
    } catch (error) {
        // If an error occurs, send an error response
        console.error('Error adding to cart:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getCartDetails = async (req, res) => {
    try {
        // Fetch cart items from the database based on the customerId parameter
        const cartData = await CartItem.find({ customerId: req.params.customerId });

        // Prepare the response data
        const data = {
            count: cartData.length,
            cartData: cartData
        };

        // Send the cart details as a JSON response
        res.status(200).json(data);
    } catch (error) {
        // If an error occurs, send an error response
        console.error('Error fetching cart details:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};