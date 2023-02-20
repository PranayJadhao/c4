const PostModel=require("../model/PostModel")

const get=async(req,res)=>{
    try{
        const allPost=await PostModel.find();
        console.log("All Post")
        res.send(allPost)
    }catch(err){
        console.log(err)
        res.send(err)
    }
}

const getSinglePost=async(req,res)=>{
    const {_id}=req.params;
    try{
        const SinglePost=await PostModel.find({_id});
        console.log("Single Post")
        res.send(SinglePost)
    }catch(err){
        console.log(err)
        res.send(err)
    }
}

const addPost=async(req,res)=>{
    const payload=req.body;
    try{
        const post=await PostModel(payload)
        post.save();
        console.log("Post added")
        res.send("Post added")
    }catch(err){
        console.log(err)
        res.send(err)
    }
}

const updatePost=async(req,res)=>{
    const payload=req.body;
    const {_id}=req.params;
    try{
        const UpdatedPost=await PostModel.findByIdAndUpdate({_id},payload);
        console.log("Post Updated")
        res.send(UpdatedPost)
    }catch(err){
        console.log(err)
        res.send(err)
    }
}

const deletePost=async(req,res)=>{
    const payload=req.body;
    const {_id}=req.params;
    try{
        const DeletedPost=await PostModel.findByIdAndDelete({_id},payload);
        console.log("Post deleted")
        res.send(DeletedPost)
    }catch(err){
        console.log(err)
        res.send(err)
    }
}

module.exports={
    get,addPost,updatePost,deletePost,getSinglePost
}

