const express = require('express');
const cors = require('cors');
const server = express(); 


server.use(express.json()); 
server.use(cors())

// Routes
//server.use()


// Sanity check 
server.get('/', (req, res) => {
    res.send(`<p>Vanzetti and Sacco backend is up and running.</p>`);
});


module.exports = server;