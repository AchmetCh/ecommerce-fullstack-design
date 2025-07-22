const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        name: String,
        price: Number,
        quantity: Number,
      }
    ],
    customer: {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      }
    },
    totalPrice: {
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true, // this adds createdAt and updatedAt automatically
  }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
