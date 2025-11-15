import express from 'express'
import 'dotenv/config'
import userRoute from './routes/userRoute.js'
import mongoose from 'mongoose'
const server = express()
server.use(express.json())

const connectDB=async()=>{
    try{
       await mongoose.connect(process.env.MONGO_URL)
       console.log("connected")
    }
    catch(err){console.log(err)} 
}
connectDB()


server.use("/api",userRoute)


// server.get('/',(req,res)=>{
//     res.send("hello from express")
// })

const port = process.env.PORT ||6000
server.listen(port , ()=>console.log(`server started at http://localhost:${port}`))