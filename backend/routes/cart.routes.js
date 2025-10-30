import { Router } from "express";
import { addToCart, deleteFromCart, getCarts } from "../controllers/cart.controller.js";

const router=Router()

router.get("/carts",getCarts)
router.post("/add",addToCart)
router.delete("/Delete",deleteFromCart)


export default router