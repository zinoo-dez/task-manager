const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must add value"],
    trim: true,
    maxLength: [20, "cannot add more than 20 charctor"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("Task", TaskSchema);
