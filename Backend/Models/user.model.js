const mongoose=require("mongoose")


const UserSchema=mongoose.Schema({
    name:String,
    pass:String,
    email:String,
    number:Number

},{
    versionkey:false
})

const UserModel=mongoose.model("user",UserSchema)

module.exports={
    UserModel
}
