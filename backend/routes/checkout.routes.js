import { Router } from "express";
import { checkout } from "../controllers/checkout.controller.js";

const router=Router()

router.post("/",checkout)


export default router