const Router = require("express");

const userController = require("../controllers/UserController");

const router = new Router();

router.post("/login", userController.login);
router.get("/all", userController.getAllUsers);

module.exports = router;
