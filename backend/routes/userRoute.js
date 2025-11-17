import express from 'express'
import User from '../models/userModel.js'
const router = express.Router()

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

//get - http://localhost:5000/api
router.get("/",async(req,res)=>{
    try{
        const user = await User.find()
        res.status(200).json(user)
    }
    catch(err){
        res.status(400).json({"message":err.message})
    }
})

//get by id- http://localhost:5000/api/id
router.get("/:id",async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    }
    catch(err){
        res.status(400).json({"message":err.message})
    }
})


//delete
router.delete("/:id",async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(200).json(user)
    }
    catch(err){
        res.status(400).json({"message":err.message})
    }
})
//update
router.put("/:id",async(req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id , req.body, 
            {new:true , runValidators:true}
        )
        res.status(200).json(user)
    }
    catch(err){
        res.status(400).json({"message":err.message})
    }
})

export default router

