const order = require("../models/orders");


// Add a new order
exports.addOrder = async (req, res) => {
  const { items, customer, totalPrice } = req.body;
  try {
    if (!items || !customer || !totalPrice) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // Validate items
    if (!Array.isArray(items) || items.length === 0) {
      return res
        .status(400)
        .json({ message: "Items must be a non-empty array" });
    }
    const newOrder = new order({
      items,
      customer,
      totalPrice,
    });
    await newOrder.save();
    res
      .status(201)
      .json({
        message: "Order placed successfully",
        order: newOrder,
        orderId: newOrder._id,
      });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await order.find()
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}


// Get an order by ID
exports.getOrderById = async (req, res) => {
    const { id } = req.params;
    try {
        const orderItem = await order.findById(id)
        if (!orderItem) {
        return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json(orderItem);
    } catch (error) {
        console.error("Error fetching order:", error);
        res.status(500).json({ message: "Internal server error" });
    }
    }

    // Get order by email
exports.getOrderByEmail = async (req, res) => {
    const { email } = req.params;
    try {
        const orders = await order.find({ "customer.email": new RegExp(`^${email}$`, "i") })
        if (orders.length === 0) {
            return res.status(404).json({ message: "No orders found for this email" });
        }
        res.status(200).json(orders);
    } catch (error) {
        console.error("Error fetching orders by email:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Delete order by ID
exports.deleteOrderById = async (req, res) => {
    const { id } = req.params;
    try {
        const orderItem = await order.findByIdAndDelete(id);
        if (!orderItem) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        console.error("Error deleting order:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Change order status
exports.changeOrderStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const orderItem = await order.findByIdAndUpdate(id, { status }, { new: true });
        if (!orderItem) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json({ message: "Order status changed successfully", order: orderItem });
    } catch (error) {
        console.error("Error changing order status:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}