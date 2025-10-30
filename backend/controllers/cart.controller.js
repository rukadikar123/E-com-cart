import { Cart } from "../models/Cart.schema.js";
import { Product } from "../models/Product.schema.js";
import getUser from "../utils/getUser.js";

export const getCarts = async (req, res) => {
  try {
    const user = await getUser();
    const cartItems = await Cart.find({ userId: user._id }).populate(
      "productId"
    );

    const total = cartItems.reduce(
      (sum, item) => sum + item.productId.price * item.quantity,
      0
    );

    return res.status(200).json({
      success: true,
      message:
        cartItems.length === 0
          ? "cart is empty"
          : "Cart items fetched successfully",
      cartItems,
      total,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: `getCarts: ${error.message}`,
    });
  }
};

export const addToCart = async (req, res) => {
  try {
    const { productId, qty } = req.body;
    const user = await getUser();

    const product = await Product.findById(productId);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    let item = await Cart.findOne({ userId: user._id, productId });
    if (item) {
      item.quantity += qty;
      await item.save();
    } else {
      item = await Cart.create({ userId: user._id, productId, quantity: qty });
    }

    return res.status(200).json({
        success:true,
        message:"Product Added to cart successfully",
        item
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: `addToCart: ${error.message}`,
    });
  }
};

export const deleteFromCart = async (req, res) => {
  try {

    const {id}=req.params
    
    await Cart.findByIdAndDelete(id);
    return res.status(200).json({
        success:true,
        message:"item removed successfully"
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: `deleteFromCart: ${error.message}`,
    });
  }
};
