const express = require('express');
const router = express.Router();
const People = require('../models/models.js');

router.get('/people', (req, res) => {
    try {
        const people = People.findPeople()
        res.status(200).json({people})
    }
    catch (error) {
        res.status(500).json({error})
    }
}) 

router.get('/person/:id', (req, res) => {
    try {
        const person = People.findPersonById(req.params.id)
        res.status(200).json({person}) 
    }
    catch (error) {
        res.status(500).json({error})
    }
}) 

router.post('/person', (req, res) => {
    try {
        const newPerson = await addPerson(req.body)
        res.status(200).json(newPerson)
    }
    catch (error) {
        res.status(500).json({error})
    }
})

router.put('/person/:id', (req, res) => {
    try {
        let updatedPerson = updatePerson(req.params.id, req.body) 
        res.status(200).json(updatedPerson)
    }
    catch (error) {
        res.status(500).json({error})
    }
}) 

router.delete('/person/:id', (req, res) => {
    try {
        let deletedPerson = removePerson(req.params.id) 
        res.status(200).json(deletedPerson)
    } 
    catch (error) {
        res.status(500).json({error})
    }
})