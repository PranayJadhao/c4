const RegisterationModel=require("../model/RegisterationModel")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")


const register=(req,res)=>{
    const {name,email,gender,password,age,city}=req.body;
    bcrypt.hash(password,5,(err,secrued_pass)=>{
        if(err){
            console.log(err)
        }else{
            try{
                const user=RegisterationModel({name,email,gender,password:secrued_pass,age,city})
                user.save();
                console.log("registered")
                res.send("Registered")
            }catch(err){
                console.log(err)
            }
        }
    })
}

const login=async (req,res)=>{
    const {email,password}=req.body;
    try{
     const user=await RegisterationModel.find({email})
     if(user.length>0){
 bcrypt.compare(password,user[0].password,(err,result)=>{
 if(result){
     const token=jwt.sign({course:"backend"},"masai");
     res.send({"msg":"login Successfull","token":token})
 }else{
     res.send("wrong credntials")
 }
 });
     }
     else{
         res.send("wrong credntials")
     }
    }catch(err){
     console.log(err)
    }
 }

module.exports={register,login};