const express = require('express');
const routes = express.Router();

const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/likesController');
const DislikeController = require('./controllers/dislikeController');


routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:dev_id/likes', LikeController.store);
routes.post('/devs/:dev_id/dislikes', DislikeController.store);



module.exports = routes;