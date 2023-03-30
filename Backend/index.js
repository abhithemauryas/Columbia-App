const express=require("express")
const mongoose =require("mongoose")
const {connection}=require("./Config/db")
const {userRouter}=require("./Router/user")
require('dotenv').config()

const app=express()

app.use(express.json())

app.use(userRouter)

// app.get("/user",(req,res)=>{
//     res.send("Hello")
//     console.log("Hello")

// })



app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("Db is connected")
    } catch (error) {
        console.log(error)
        console.log("Db is not connected")
    }
    console.log(`http://localhost:${process.env.port}`)
})

