const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const MONGOURI = process.env.MONGOURI;


function DBConnection() {
    mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {

        try {
            console.log("Database is connected")
        } catch (error) {
            console.log("Something wrong while connecting database")
        }
    })
}

module.exports = DBConnection;