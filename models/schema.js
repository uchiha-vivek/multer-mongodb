const mongoose = require('mongoose')


const imageSchema = mongoose.Schema({

   name:{
    type:String,
    required:true

   },

   image:{

    data:Buffer,
    contentType:String


   }




})

const imageModel  = mongoose.model("store",imageSchema)
module.exports = imageModel