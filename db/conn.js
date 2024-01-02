const mongoose = require('mongoose')

const dbConnection = async() =>{
    const DB_URI='mongodb_url'
    try{
        await mongoose.connect(DB_URI,{useUnifiedTopology:true})
        console.log(`Database connected successfully`)
         


    }catch(e){
        console.log(`Error while connecting to the database`,e.message)

    }
}

module.exports = dbConnection