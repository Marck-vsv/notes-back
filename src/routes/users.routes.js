const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const usersController = require("../controllers/usersControllers");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const UsersController = new usersController();

usersRoutes.post("/", UsersController.create);
usersRoutes.put("/", ensureAuthenticated, UsersController.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), (request, response) => {
  console.log(request.file.filename);
  response.json();
});

module.exports = usersRoutes;
