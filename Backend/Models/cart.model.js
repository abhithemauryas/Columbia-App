const mongoose=require("mongoose")

const CartSchema=mongoose.Schema({
    image: String,
    desc:String,
    price:Number,
    gender:String

})
const CartModel=mongoose.model("Cart",CartSchema)

module.exports={
    CartModel
}