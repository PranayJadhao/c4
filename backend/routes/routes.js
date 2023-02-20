const express=require("express");
const {get,addPost,updatePost,deletePost,getSinglePost}=require("../Controller/Post")
const {register,login}=require("../Controller/Registeration");

const loginMiddleware = require("../Middleware/login.middleware");

const appRouter=express.Router();

appRouter.post("/users/register",register)
appRouter.post("/users/login",login)

appRouter.use(loginMiddleware)
appRouter.get("/posts",get)
appRouter.get("/create",addPost)
appRouter.get("/posts/:_id",getSinglePost)
appRouter.patch("/posts/update",updatePost)
appRouter.delete("/posts/delete",deletePost)

module.exports=appRouter;
