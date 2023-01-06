const mongoose = require('mongoose');

const restaurentSchema = new mongoose.Schema({

    category_id: {
        type: Number,
        required: true,

    },
    name: {
        type: String,
        required: true,
    },

    address: {
        type: String,
        required: true,
    },

    phone: {
        type: Number,
        required: true,
    },

    start_time: {
        type: String,
        required: true,
    },

    close_time: {
        type: String,
        required: true,
    },
})

const restaurents = mongoose.model('restaurents', restaurentSchema);

module.exports = restaurents;