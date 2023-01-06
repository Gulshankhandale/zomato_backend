const mongoose = require('mongoose');

const fooditemsSchema = new mongoose.Schema({

    restaurent_id: {
        type: Number,
        required: true,

    },

    category_id: {
        type: Number,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    }
})

const fooditems = mongoose.model('fooditems', fooditemsSchema);

module.exports = fooditems;