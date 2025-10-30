import { Product } from "../models/Product.schema.js";

export const getProducts = async (req, res) => {
  try {

     const products = await Product.find();
   
     return res.status(200).json({
        success:true,
        message:products.length >0 ?"products fetched successfully" : "no products found",
        products
     })

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: `getProducts: ${error.message}`,
    });
  }
};
