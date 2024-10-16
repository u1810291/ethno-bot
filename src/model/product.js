
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    parcel: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;