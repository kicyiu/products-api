const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: Number,
    brand: String,
    description: String,
    image: String,
    price: Number
});

module.exports = mongoose.model("product", productSchema);