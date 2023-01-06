const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({


    restaurent_id: {
        type: Number,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },


})

const categories = mongoose.model('categories', categoriesSchema);

module.exports = categories;