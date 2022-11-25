const Message = require("../models/MessageModel");

class MessageController {
  async createNewMessage(req, res, next) {
    const { from, to, title, body } = req.body;
    try {
      const message = await Message.create({ from, to, title, body });
      return res.status(200).json("done");
    } catch (error) {
      res.json({ status: "error" });
    }
  }

  async getInbox(req, res, next) {
    const { name } = req.query;
    try {
      const messages = await Message.find({ to: name }).sort({ createdAt: -1 });
      return res.status(200).json(messages);
    } catch (error) {
      res.status(500);
    }
  }
  async getOutBox(req, res, next) {
    const { name, to } = req.query;
    try {
      const messages = await Message.find({ from: name, to }).sort({
        createdAt: -1,
      });
      return res.status(200).json(messages);
    } catch (error) {
      res.status(500);
    }
  }
}

module.exports = new MessageController();
