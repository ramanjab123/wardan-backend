const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Variant sub-schema
const variantSchema = new Schema({
    weight: String,
    price: Number
});

// Product schema
const productSchema = new Schema({
    name: String,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    category: String,
    images: [String],
    bestSeller: Boolean,
    variant: [variantSchema],
    description: String
});

// User schema (if needed)
const userSchema = new Schema({
    username: String,
    password: String
});

const cartItemSchema = new mongoose.Schema({
    customerId: { type: String, required: true },
    productId: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    // name: { type: String, required: true },
    // discountPercentage: { type: Number, required: true },
    // category: { type: String, required: true },
    // images: [String], // Assuming images are stored as an array of strings
    // description: { type: String, required: true }
});
// Exporting models
const Product = mongoose.model('Product', productSchema);
const User = mongoose.model('User', userSchema);
const CartItem = mongoose.model('CartItem', cartItemSchema);
module.exports = {
    Product,
    User,
    CartItem
};