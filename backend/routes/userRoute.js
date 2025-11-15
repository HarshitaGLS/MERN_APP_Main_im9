import express from 'express'
import User from '../models/userModel.js'
const router = express.Router()

//http://localhost:5000/api
router.get('/',(req,res)=>{
    res.send("hello from express")
})
router.get('/:id',(req,res)=>{
    res.send(req.params.id)
})
//http://localhost:5000/api/save =>post request
router.post("/save",async(req,res)=>{
    // res.send(JSON.stringify(req.body))
    try{
        const user = await User.create(req.body)
        res.status(200).json(user)
    }
    catch(err){
        res.status(400).json({"message":err.message})
    }
})

export default router

