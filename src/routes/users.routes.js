const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const usersController = require("../controllers/usersControllers");
const UserAvatarController = require("../controllers/UserAvatarController");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const UsersController = new usersController();
const userAvatarController = new UserAvatarController();
usersRoutes.post("/", UsersController.create);
usersRoutes.put("/", ensureAuthenticated, UsersController.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update);

module.exports = usersRoutes;
