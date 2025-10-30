import { Router } from "express";
import { addToCart, deleteFromCart, getCarts } from "../controllers/cart.controller.js";

const router=Router()

router.get("/",getCarts)
router.post("/add",addToCart)
router.delete("/Delete/:id",deleteFromCart)


export default router