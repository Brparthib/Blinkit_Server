const { default: mongoose } = require("mongoose");
const User = require("./userModel");

// delivery partner model
const deliveryPartnerSchema = mongoose.Schema(
  {
    ...User.schema.obj,
    email: {
      type: Number,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["DeliveryPartner"],
      default: "DeliveryPartner",
    },
    liveLocation: {
      latitude: { type: Number },
      longitude: { type: Number },
    },
    address: { type: String },
    branch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DeliveryPartner", deliveryPartnerSchema);
