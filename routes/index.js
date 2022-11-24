const Router = require("express");
const router = new Router();

const userRouter = require("./userRoute");
const messageRouter = require("./messageRoute");

router.use("/users", userRouter);
router.use("/messages", messageRouter);

module.exports = router;
