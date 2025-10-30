import { Product } from "../models/Product.schema.js";

export const getProducts = async (req, res) => {
  try {

     const products = await Product.find();
     if(products.length===0){
        return res.status(404).json({
            success:false,
            message:"Products not found"
        })
     }

     return res.status(200).json({
        success:true,
        message:"products fetched successfully",
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
