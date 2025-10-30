import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { DBConnect } from './config/DBConnect.js'

dotenv.config()

const app=express()

DBConnect()


app.use(cors())
app.use(express.json())

const PORT=process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log("app is listening on ", PORT);
    
})
