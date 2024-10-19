const { default: mongoose } = require("mongoose");

// base user model
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      enum: ["Customer", "Admin", "DeliveryPartner"],
      require: true,
    },
    isActivated: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
