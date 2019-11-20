const express = require('express');
const router = express.Router();
const People = require('../models/models.js');

router.get('/people', async (req, res) => {
    try {
        const people = await People.findPeople()
        res.status(200).json({people})
    }
    catch (error) {
        res.status(500).json({error: error.message})
    }
}) 

router.get('/people/:id', async (req, res) => {
    try {
        const person = await People.findPersonById(req.params.id)
        res.status(200).json(person) 
    }
    catch (error) {
        res.status(500).json({error: error.message})
    }
}) 

router.post('/people', async (req, res) => {
    try {
        const newPerson = await People.addPerson(req.body)
        res.status(200).json(newPerson)
    }
    catch (error) {
        res.status(500).json({error: error.message})
    }
})

router.put('/people/:id', async (req, res) => {
    try {
        let updatedPerson = await People.updatePerson(req.params.id, req.body) 
        res.status(200).json(updatedPerson)
    }
    catch (error) {
        res.status(500).json({error: error.message})
    }
}) 

router.delete('/people/:id', (req, res) => {
    try {
        let deletedPerson = People.removePerson(req.params.id) 
        res.status(200).json(deletedPerson)
    } 
    catch (error) {
        res.status(500).json({error: error.message})
    }
})



module.exports = router;