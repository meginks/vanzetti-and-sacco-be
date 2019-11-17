const express = require('express');
const router = express.Router();
const People = require('../models/models.js');

router.get('/', (req, res) => {
    try {
        const people = People.findPeople()
        res.status(200).json({people})
    }
    catch (error) {
        res.status(500).json({error})
    }
}) 

router.get('/:id', (req, res) => {
    try {
        const person = People.findPersonById(req.params.id)
        res.status(200).json({person}) 
    }
    catch (error) {
        res.status(500).json({error})
    }
}) 