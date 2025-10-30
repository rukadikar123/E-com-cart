import { Cart } from "../models/Cart.schema.js";
import getUser from "../utils/getUser.js";

export const checkout = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await getUser();

    const cartItems = await Cart.find({ userId: user._id }).populate("productId");
    const total = cartItems.reduce(
      (sum, item) => sum + item.productId.price * item.quantity,
      0
    );

    const receipt = {
      User: { name, email },
      total,
      timestamp: new Date(),
    };

    await Cart.deleteMany({ userId: user._id });

    return res.status(200).json({
        success:true,
        message:"checked-out successfully",
        receipt
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: `checkout: ${error.message}`,
    });
  }
};
