import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {type:String , required:true},
    email: {type:String , required:true,unique:true},
    age: {type:Number}
})
const  User = mongoose.model("user" , UserSchema)
export default User