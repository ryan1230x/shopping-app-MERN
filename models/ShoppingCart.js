const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShoppingCartSchema = new Schema({
    name: {
        type:String,
        trim: true,
        required: true,
    },
    quantity: {
        type:Number,
        required:true
    },
    createdAt: {
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('ShoppingCart', ShoppingCartSchema);