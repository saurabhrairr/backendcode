
const { urlencoded } = require('express')
const express=require('express')
const mongoose  = require('mongoose')
const app=express()
const userpost=require("./schema/userschema") 
const cors=require('cors')
const findage=require('findage')
const Port=process.env.PORT || 8001
app.use(express.json())
app.use(urlencoded({extended:false}))
app.use(cors())


app.listen(Port,(err)=>{
       if(!err)
       {
              console.log("port connect to server");
       }else
       {
              console.log(err);
       }
})


mongoose.connect("mongodb+srv://saurabh:maihuyaar@cluster0.lahbocq.mongodb.net/?retryWrites=true&w=majority",(err)=>{
       if(!err)
       {
              console.log("server conection successfully");
       }
       else

       {
              console.log(err);
       }
})


app.post("/user-form",(req,res)=>{

      
              userpost.create({
                     name:req.body.name,
                     dateofbirth:req.body.dateofbirth,
                     email:req.body.email,
                     phonenumber:req.body.phonenumber
                 
                     
              }).then((data)=>{
                     res.status(200).send({data})
              }).catch((err)=>{
                     res.status(400).send(err)
              })

})



app.get("/user-form",(req,res)=>{
       userpost.find().then((data)=>{
              res.status(200).send(data)
       }).catch((err)=>{
              res.status(400).send(data)
       })
})