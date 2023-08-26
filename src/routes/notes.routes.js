const { Router } = require("express");

const ensureAuthenticated = require("../middleware/ensureAuthenticated");
const notesController = require("../controllers/notesController");
const NotesController = new notesController();
const notesRoutes = Router();

notesRoutes.use(ensureAuthenticated);

notesRoutes.get("/", NotesController.index);
notesRoutes.post("/", NotesController.create);
notesRoutes.get("/:id", NotesController.show);
notesRoutes.delete("/:id", NotesController.delete);

module.exports = notesRoutes;
