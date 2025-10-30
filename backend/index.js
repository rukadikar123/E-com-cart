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


app.use(cors())
app.use(express.json())


app.use("/product",productRoutes)
app.use("/cart",cartRoutes)
app.use("/checkout",checkoutRoutes)


const PORT=process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log("app is listening on ", PORT);
    
})
