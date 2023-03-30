const mogoose=require("mongoose")
require('dotenv').config()
const connection=mogoose.connect(process.env.mongoUrl)


module.exports={
  connection
}
