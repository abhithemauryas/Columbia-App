const mongoose=require("mongoose")

const arrivalSchema=mongoose.Schema({
    image:String,
    desc: String,
    price:Number,
    gender:String
},{
    versionkey:false
});
const arrivalModel=mongoose.model("arruser",arrivalSchema)

module.exports={
    arrivalModel
}
