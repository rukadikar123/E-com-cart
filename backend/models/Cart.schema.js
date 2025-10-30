import mongoose from "mongoose";

const cartItemSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    UserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    quantity:{
        type:Number,
        default:1
    }
},{timestamps:true})

export const Cart=mongoose.model("Cart",cartItemSchema)