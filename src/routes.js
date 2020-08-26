const routes = require('express').Router();
const IdeaController = require('./controllers/IdeaController');
const ideasController = new IdeaController();

routes.get('/', ideasController.landingPage);
routes.get('/ideas', ideasController.ideasPage);
routes.post('/', ideasController.create);

module.exports = routes;