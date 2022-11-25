const User = require("../models/userModel");

class UserController {
  async login(req, res, next) {
    const { name } = req.body;
    try {
      let user = await User.findOne({ name });
      if (!user) {
        user = await User.create({
          name,
          inbox: [],
          outbox: [],
        });
      }
      res.status(200).json(user.name);
    } catch (error) {
      res.status(500);
    }
  }

  async getAllUsers(req, res, next) {
    try {
      const allUsers = await User.find({}, "name");
      const usernames = allUsers.map((user) => user.name);
      res.status(200).json(usernames);
    } catch (error) {
      res.status(error);
    }
  }
}

module.exports = new UserController();
