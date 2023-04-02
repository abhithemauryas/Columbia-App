const mongoose=require("mongoose")

const WomenSchema=mongoose.Schema({
    image:String,
    desc: String,
    price:Number,
    gender:String
},{
    versionkey:false
});
const WomenModel=mongoose.model("womenuser",WomenSchema)

module.exports={
    WomenModel
}
