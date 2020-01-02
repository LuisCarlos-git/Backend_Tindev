const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.json({hello: 'world'})
});

routes.post('/devs', (req, res) => {
    return res.json(req.body)
});



module.exports = routes;