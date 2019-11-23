const express = require('express');
const router = express.Router();
const data = require('../models/models.js');

// TEXTS Routes 

// get all texts
router.get('/texts', (req, res) => {
    try {
        let texts = data.findAll("texts") 
        res.status(200).json(texts) 
    }
    catch (error) {
        res.status(500).json({error: error.message})
    }
})

// get text by text id
router.get('/texts/:id', (req, res) => {
    try {
        let text = data.findById(req.params.id, "texts")
        res.status(200).json(text)
    }
    catch (error) {
        res.status(500).json({error: error.message})
    }
}) 

// get texts by author id 
router.get('/texts/author/:author_id', (req, res) => {
    try {
        
    } 
    catch (error) {

    }
}) 

// post texts
router.post('/texts', (req, res) => {
    try {
        let newText = await data.add(req.body, "texts") 
        res.status(200).json(newText)
    }
    catch (error) {
        res.status(500).json({error: error.message})
    }
})

// update texts
router.put('/texts/:id', (req, res) => {
    try {
        let updatedText = data.update(req.params.id, req.body, "texts")
        res.status(200).json(updatedText) 
    }
    catch (error) {
        res.status(500).json({error: error.message}) 
    }
}) 

// delete text by text id 
router.delete('/texts/:id', (req, res) => {
    try {
        data.remove(req.params.id, "texts")
        res.status(200).json({message: `The text with id ${req.params.id} was successfully deleted`})
    }
    catch (error) {
        res.status(500).json({error: error.message})
    }
})


module.exports = router;