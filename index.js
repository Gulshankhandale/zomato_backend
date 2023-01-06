const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();
const DBConnection = require('./db.config')
const zomatoRoutes = require('./routes/zomato.routes')
const PORT = process.env.PORT;


DBConnection();
app.use(bodyParser.json());
app.use(cors());

app.use('/', zomatoRoutes);

app.listen(PORT, () => {
    console.log(`The app is running on ${PORT}`)
})