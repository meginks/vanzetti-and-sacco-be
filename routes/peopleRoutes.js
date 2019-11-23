const express = require('express');
const router = express.Router();
const data = require('../models/models.js');

router.get('/people', async (req, res) => {
    try {
        const people = await data.findAll("people")
        res.status(200).json({people})
    }
    catch (error) {
        res.status(500).json({error: error.message})
    }
}) 

router.get('/people/:id', async (req, res) => {
    try {
        const person = await data.findById(req.params.id, "people")
        res.status(200).json(person) 
    }
    catch (error) {
        res.status(500).json({error: error.message})
    }
}) 

router.post('/people', async (req, res) => {
    try {
        const newPerson = await data.add(req.body, "people")
        res.status(200).json(newPerson)
    }
    catch (error) {
        res.status(500).json({error: error.message})
    }
})

router.put('/people/:id', async (req, res) => {
    try {
        let updatedPerson = await data.update(req.params.id, req.body, "people") 
        res.status(200).json(updatedPerson)
    }
    catch (error) {
        res.status(500).json({error: error.message})
    }
}) 

router.delete('/people/:id', (req, res) => {
    try {
        let deletedPerson = data.remove(req.params.id, "people") 
        res.status(200).json({message: `The person with id ${req.params.id} has been successfully deleted.`})
    } 
    catch (error) {
        res.status(500).json({error: error.message})
    }
})

module.exports = router;