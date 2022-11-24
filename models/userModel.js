const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 20,
    min: 1,
  },
  inbox: Array,
  outbox: Array,
});

module.exports = mongoose.model("User", userSchema);
