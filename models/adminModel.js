const { default: mongoose } = require("mongoose");
const User = require("./userModel");

const adminSchema = new mongoose.Schema({
  ...User.schema.obj,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Admin"],
    default: "Admin",
  },
});

module.exports = mongoose.model("Admin", adminSchema);
