import { Router } from "express";
import { getProducts } from "../controllers/product.controller.js";

const router=Router()

router.get("/all",getProducts)


export default router