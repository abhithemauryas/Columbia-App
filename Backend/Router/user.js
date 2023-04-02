const express=require("express")
const userRouter=express.Router()
const {UserModel}=require("../Models/user.model")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")

//signup
userRouter.post("/signup",async(req,res)=>{
    const{name,email,pass,number}=req.body
    try {
        bcrypt.hash(pass,5,async(err,hash)=>{
            const user=new UserModel({name,email,pass:hash,number})
            await user.save()
            res.status(200).send({ "msg":"Registraction is done" })

        })
    } catch (error) {
        res.status(400).status(400).send({ "msg": error.message }) 
    }
})
userRouter.post("/login",async(req,res)=>{
    
    try {
            const {email,pass}=req.body
            const user=await UserModel.find({email})
            console.log(user)
            bcrypt.compare(pass,user[0].pass,(error,result)=>{
                if(result){
                    res.status(200).send({"msg":"Login successful","token":jwt.sign({name:'batman'},'bruce')})
                }else{
                    res.send({"msg":"Wrong password"})
                }
            })
        
    } catch (error) {
        console.log(error)
        res.status(400).send({"msg":"Login failed"})
    }
})

module.exports={
    userRouter
}