import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import productRoutes from "./routes/product.routes.js"
import cartRoutes from "./routes/cart.routes.js"
import checkoutRoutes from "./routes/checkout.routes.js"
import { DBConnect } from './config/DBConnect.js'

dotenv.config()

const app=express()

DBConnect()


app.use(cors({
    origin: "http://localhost:5173",
  }))
app.use(express.json())


app.use("/api/products",productRoutes)
app.use("/api/carts",cartRoutes)
app.use("/api/checkout",checkoutRoutes)


const PORT=process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log("app is listening on ", PORT);
    
})
