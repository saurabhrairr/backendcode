const mongoose=require('mongoose')

const user=new mongoose.Schema({

       name:String,
      dateofbirth:{
       type: Date,
       require:true
},
       email:{
              type:String,
              require:true,
              unique:true,
              match:/.+\@.+.+\.+/,

       },
       phonenumber:{
              type:Number,
       }

})
const userpost= mongoose.model("user",user)
module.exports=userpost