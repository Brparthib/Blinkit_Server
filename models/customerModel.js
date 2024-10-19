const { default: mongoose } = require("mongoose");
const User = require("./userModel");

// customer model
const customerSchema = new mongoose.Schema(
  {
    ...User.schema.obj,
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["Customer"],
      default: "Customer",
    },
    liveLocation: {
      latitude: { type: Number },
      longitude: { type: Number },
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);
