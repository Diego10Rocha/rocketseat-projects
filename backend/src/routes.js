const express = require('express');

const ONGController = require('./controllers/ONGController');

const IncidentsController = require('./controllers/IncidentsController')

const ProfileController = require('./controllers/ProfileController')

const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/ongs', ONGController.index);
routes.post('/ongs', ONGController.create);

routes.post('/incidents', IncidentsController.create);
routes.get('/incidents', IncidentsController.index);
routes.delete('/incidents/:id', IncidentsController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;