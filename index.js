const express = require('express');
const mongoose = require('mongoose');
const { Product } = require('./src/models/data/schema');
const { products } = require("./src/models/data/user_data")
const loginRoutes = require('./src/routes/routes')
const cors = require('cors');
const app = express();
const PORT = 8000;
app.use(express.json());
app.use(cors());

app.use('/', loginRoutes);

mongoose.connect('mongodb://localhost:27017/wardan')
    .then(async () => {
        console.log('Connected to MongoDB');
        // Check if dummy data exists
        try {
            const count = await Product.countDocuments({});
            console.log(count);
            // If no data exists, insert dummy data
            if (count === 0) {
                await Product.insertMany(products.products);
                console.log('Dummy data inserted successfully');
            } else {
                console.log('Dummy data already exists');
            }
        } catch (error) {
            console.error('Error checking for existing data or inserting dummy data:', error);
        }
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });


app.listen(PORT, (req, res) => {
    console.log(`Server is running on Port : ${PORT}`)
})