const express=require("express")
const mongoose =require("mongoose")
const {connection}=require("./Config/db")
const {arrivalRoute} = require("./Router/newarrival")
const {userRouter}=require("./Router/user")
require('dotenv').config()
const cors=require("cors")
const app=express()
app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(arrivalRoute)


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

