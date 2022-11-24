const Message = require("../models/messageModel");
const User = require("../models/userModel");

class MessageController {
  async createNewMessage(req, res, next) {
    const { from, to, title, body } = req.body;
    try {
      const message = await Message.create({ from, to, title, body });
      const sender = await User.findOne({ name: from });
      const receiver = await User.findOne({ name: to });
      sender.outbox.push(message);
      receiver.inbox.push(message);
      await sender.save();
      await receiver.save();
      return res.status(200).json("done");
    } catch (error) {
      res.json({ status: "error" });
    }
  }

  async getInbox(req, res, next) {
    const { name } = req.query;
    try {
      const user = await User.findOne({ name }).sort({ createdAt: 1 });
      return res.status(200).json(user.inbox);
    } catch (error) {
      res.status(500);
    }
  }
  async getOutBox(req, res, next) {
    const { name } = req.query;
    try {
      const user = await User.findOne({ name }).sort({ createdAt: 1 });
      return res.status(200).json(user.outbox);
    } catch (error) {
      res.status(500);
    }
  }
}

module.exports = new MessageController();
