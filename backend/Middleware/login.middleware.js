const jwt=require("jsonwebtoken");
const RegisterationModel=require("../model/RegisterationModel")
const bcrypt=require("bcrypt")


const loginMiddleware=(req,res,next)=>{
    const {authorization}=req.headers;
    if(!authorization){
        return res.send("Not authorized")
    }else{
        const token=authorization.replace("Bearer","");
        jwt.verify(token,"masai",(err,data)=>{
            if(err){
                console.log(err);
                res.send("error")
            }
            else{
                const {_id}=data;
                RegisterationModel.findById(_id).then(userData=>{
                    req.user=userData;
                    next()
                })
            }
        })
    }
}

module.exports=loginMiddleware
