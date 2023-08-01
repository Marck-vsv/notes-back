const { Router } = require('express');

const ensureAuthenticated = require('../middleware/ensureAuthenticated');
const usersController = require('../controllers/usersControllers');
const UsersController = new usersController();
const usersRoutes = Router();

usersRoutes.post("/", UsersController.create);
usersRoutes.put("/", ensureAuthenticated, UsersController.update);

module.exports = usersRoutes;