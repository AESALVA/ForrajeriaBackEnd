const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 120,
        unique: true,
    },
    title: {
        type: String,
        required: true,
        min: 6,
        max: 120,
        unique: true,
    },
    category: {
        type: String,
        required: true,
        min: 6,
        max: 20,
        unique: true,
    },
    subcategory: {
        type: String,
        required: true,
        min: 6,
        max: 15,
        unique: true,
    },
    type: {
        type: String,
        required: true,
        min: 6,
        max: 15,
        unique: true,
    },
    description:{
        type: String,
        required: true,
        min: 6,
        max: 120,
        unique: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
        max: 10,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
        min: 1,
        max: 20,
        unique: true,
    },
    img:{
        type: String,
        required: true,
        min: 6,
        max: 50,
        unique: true,
    },
})



const product = mongoose.model('products', userSchema);

module.exports = product;