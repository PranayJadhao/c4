const express=require("express")
const connection=require("./Config/database")
const cors=require("cors");
const appRouter = require("./routes/routes");
require("dotenv").config;


const app=express();
app.use(cors);
app.use(express.json());
app.use("/",appRouter)

app.listen(process.env.port,async()=>{
    try{
        await connection;
        console.log(`Database connected and server running at ${process.env.port}`)
    }catch(err){
        console.log({"error":err})
    }
})
