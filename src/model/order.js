
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const Order = mongoose.model('order', orderSchema);

module.exports = Order;