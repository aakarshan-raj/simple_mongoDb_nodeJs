const express = require("express")
const {connection} = require("./db/connection")
require("dotenv").config()
const app = express()
const {Tank} = require("./db/model")

app.use(express.json())

const start = async ()=>{
 
    try{
       await connection(process.env.CONNECTION_STRING).then(()=>console.log("sucessful"))
    }  
    catch(err){
        console.log("Failed")
    }
    app.listen(3000,()=>{
        console.log("Server running on 3000 port")
  })

  app.get("/insert_get", async(req,res)=>{
    try{
   await Tank.create({name:"Aakarshan",work:"DEV"})
   res.send("Done")
    }
    catch(err){
        res.send("Error")
    }
    
  })

  app.post("/insert_post", async(req,res)=>{
    try{
   await Tank.create(req.body)
   res.json("Done")
    }
    catch(err){
        res.json("Error")
    }
    
  })

}

start()