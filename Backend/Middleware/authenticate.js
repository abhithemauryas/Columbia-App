require('dotenv').config()
const jwt =require("jsonwebtoken")
const authentication=async(req,res,next)=>{
    let token=req.headers.authorization
    if(token){
        let decode=jwt.verify(token,process.env.token_secret)
        if(decode){
            console.log(decode)
            console.log(decode.dataid)
            req.body.userID=decode.dataid
            req.body.email=decode.email
            next()
        }
    }else{
        res.send({"msg":"Login again"})
    }
}
module.exports={
    authentication,
}