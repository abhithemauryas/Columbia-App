const express=require("express")
const arrivalRoute=express.Router()
const {arrivalModel}=require("../Models/newarrival.model")
const {WomenModel}=require("../Models/women.model")
const {CartModel}=require("../Models/cart.model")
const {arrnew}=require("../arrival")
const {women}=require("../women")


arrivalRoute.post("/post",async(req,res)=>{
    try {
        let data=await arrivalModel.insertMany(arrnew)
        res.send({"msg":"Data Posted"})
    } catch (error) {
        console.log(error)
        res.send({"msg":"Something went Wrong"})
        
    }
})
arrivalRoute.get("/get",async(req,res)=>{
    try {
        let data = await arrivalModel.find()
        console.log(data)
        res.send({"mag":"data Posted",data})

    } catch (error) {
        console.log(error)
        res.send({"msg":"Somethin Went Wrong"})
    }
})
//women
arrivalRoute.post("/post/women",async(req,res)=>{
    try {
        let data=await WomenModel.insertMany(women)
        res.send({"msg":"Data Posted"})
    } catch (error) {
        console.log(error)
        res.send({"msg":"Something went Wrong"})
        
    }
})

arrivalRoute.get("/get/women",async(req,res)=>{
    try {
        let data = await WomenModel.find()
        console.log(data)
        res.send({"mag":"data Posted",data})

    } catch (error) {
        console.log(error)
        res.send({"msg":"Somethin Went Wrong"})
    }
})


///

//cart
arrivalRoute.get("/cart/get",async(req,res)=>{
    try {
      let data=await  CartModel.find() 
      res.send({"msg":"your data is addeed in cart",data})
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"});
    }
})
arrivalRoute.post("/cart/post",async(req,res)=>{
    try {
        let data=new CartModel(req.body);
        await data.save()
        res.send({"msg":"your data is addeed in cart",data})
        console.log(data)
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"});
    }
});
module.exports={
    arrivalRoute
}



