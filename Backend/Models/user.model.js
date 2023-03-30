const mongoose=require("mongoose")


const UserSchema=mongoose.Schema({
    name:String,
    pass:String,
    email:String,
    number:Number

})

const UserModel=mongoose.model("user",UserSchema)

module.exports={
    UserModel
}
