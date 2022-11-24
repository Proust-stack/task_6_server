const Router = require("express");

const messageController = require("../controllers/MessageController");

const router = new Router();

router.post("/newmessage", messageController.createNewMessage);
router.get("/inbox", messageController.getInbox);
router.get("/outbox", messageController.getOutBox);

module.exports = router;
