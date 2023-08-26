const { Router } = require("express");

const ensureAuthenticated = require("../middleware/ensureAuthenticated");
const tagsController = require("../controllers/tagsController");
const TagsController = new tagsController();
const tagsRoutes = Router();

tagsRoutes.get("/", ensureAuthenticated, TagsController.index);

module.exports = tagsRoutes;
