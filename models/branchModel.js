const { default: mongoose } = require("mongoose");

const branchSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      latitude: { type: String },
      longitude: { type: Number },
    },
    address: { type: String },
    deliveryPartners: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DeliveryPartner",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Branch", branchSchema)