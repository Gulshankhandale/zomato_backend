const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const restaurentsModel = require('../models/restaurents.model')
const categoriesModel = require('../models/categories.model')
const fooditemsModel = require('../models/fooditems.model')

// Greeting Message

router.get('/', (req, res) => {

    try {
        res.send({ message: "Welcome to Zomato Application" })
    } catch (error) {
        res.send({ message: "Something went wrong" })
    }
})

// Get All Data
// Restaurents
router.get('/fetch-all-restaurents', async (req, res) => {

    const restaurents = await restaurentsModel.find();

    try {
        res.send(restaurents)
    } catch (error) {
        res.send({ message: "Something went wrong" })
    }
})

// Categories

router.get('/fetch-all-categories', async (req, res) => {

    const categories = await categoriesModel.find();

    try {
        res.send(categories)
    } catch (error) {
        res.send({ message: "Something went wrong" })
    }
})

// Food Items

router.get('/fetch-all-food-items', async (req, res) => {

    const fooditems = await fooditemsModel.find();

    try {
        res.send(fooditems)
    } catch (error) {
        res.send({ message: "Something went wrong" })
    }
})

// Post All Data

router.post('/add-restaurents', async (req, res) => {

    let restaurents = new restaurentsModel({

        name: req.body.name,
        category_id: req.body.category_id,
        address: req.body.address,
        phone: req.body.phone,
        start_time: req.body.start_time,
        close_time: req.body.close_time,
    })

    try {
        await restaurents.save();
        res.send({ message: "restaurent added successfully" })
    } catch (error) {
        res.send(error)
    }
})

// Categories

router.post('/add-categories', (req, res) => {

    const categories = new categoriesModel({
        name: req.body.name,
        restaurent_id: req.body.restaurent_id,
    })

    try {
        categories.save();
        res.send({ message: "Category added successfully" })
    } catch (error) {
        res.send({ message: "Something went wrong" })
    }
})

// Food Items

router.post('/add-food-items', async (req, res) => {

    const fooditems = new fooditemsModel({
        name: req.body.name,
        restaurent_id: req.body.restaurent_id,
        category_id: req.body.category_id,
        price: req.body.price,
    })

    try {
        await fooditems.save();
        res.send({ message: "Food Item Added Successfully" })
    } catch (error) {
        res.send({ message: "Something went wrong" })
    }
})

// Delete

// Restaurents

router.delete('/restaurents/delete/:id', async (req, res) => {

    let _id = req.params.id;

    try {
        let restaurent = await restaurentsModel.findByIdAndDelete(_id)
        res.send({ message: "Restaurent Deleted Successfully" })
    } catch (error) {
        res.send({ message: "Something went wrong" })
    }
})

// Categories

router.delete('/categories/delete/:id', (req, res) => {

    let _id = req.params.id;

    try {
        let categories = categoriesModel.findByIdAndDelete(_id)
        res.send({ message: "Category deleted successfully" })
    } catch (error) {
        res.send({ message: "Something went wrong" })
    }
})

// Food Items

router.delete('/fooditems/delete/:id', (req, res) => {

    let _id = req.params.id;

    try {
        let fooditems = fooditemsModel.findByIdAndDelete(_id)
        res.send({ message: "Food Item Deleted Successfully" })
    } catch (error) {
        res.send({ message: "Something went wrong" })
    }
})


// Update

// Restaurents

router.put('/restaurents/update/:id', async (req, res) => {

    let _id = req.params.id;

    try {
        let restaurent = await restaurentsModel.findByIdAndUpdate(_id, req.body, {
            new: true,
            runValidators: true
        })
        res.send({ message: "Data updated successfully" })
    } catch (error) {
        res.send({ message: "Something went wrong" })
    }
})

// Categories

router.put('/categories/update/:id', async (req, res) => {

    let _id = req.params.id;

    try {
        let categories = await categoriesModel.findByIdAndUpdate(_id, req.body, {

            new: true,
            runValidators: true
        })

        res.send({ message: "Data updated successfully" })
    } catch (error) {
        res.send({ message: "Something went wrong" })
    }
})

// Food Items

router.put('/food-items/update/:id', async (req, res) => {

    let _id = req.params.id;

    try {
        let fooditems = await fooditemsModel.findByIdAndUpdate(_id, req.body, {

            new: true,
            runValidators: true
        })
        res.send({ message: "Data updated successfully" })
    } catch (error) {
        res.send({ message: "Something went wrong" })
    }
})

// Find Only One Record

// Restaurents

router.get('/restaurents/:id', async (req, res) => {

    let _id = req.params.id;

    try {
        let restaurent = await restaurentsModel.findOne({ _id })
        res.status(200).send(restaurent)
    } catch (error) {
        res.send({ message: "Something went wrong" })
    }
})


// Categories

router.get('/categories/:id', async (req, res) => {

    let _id = req.params.id;

    try {
        let categories = await categoriesModel.findOne({ _id })
        res.status(200).send(categories)
    } catch (error) {
        res.send({ message: "Something went wrong" })
    }
})

// Food Items

router.get('/food-items/:id', async (req, res) => {

    let _id = req.params.id;

    try {
        let fooditems = await fooditemsModel.findOne({ _id })
        res.status(200).send(fooditems)
    } catch (error) {
        res.send({ message: "Something went wrong" })
    }
})

module.exports = router;