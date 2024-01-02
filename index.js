const express =  require('express')
const dbConnection = require('./db/conn.js')
const bodyParser = require('body-parser')
const multer  = require('multer')

const imageModel =require('./models/schema.js')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))



// storage
const storage = multer.diskStorage({

          destination:"uploads/",

          filename:function(req,file,cb){
            cb(null,file.originalname)
          }



})


const upload = multer({

    storage:storage

}).single("testimage")


//routes


app.get('/', function(req,res){
    res.send("Upload the files")
})


app.post('/upload',function(req,res){
    upload(req,res,(err) =>{
        if(err){
            console.log(err)
        }
        else{
            const newImage =new imageModel({

                name:req.body.name,
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                }
            })
            newImage.save()
            .then(() =>res.send(`Files successfully uploaded`))
            .catch((err) => console.log(err))
        }
    })
})










const PORT = 4000;
dbConnection()

const server = () => {
    app.listen(PORT,() => {

        console.log(`server is running on PORT ${PORT}`)
    })
}


server()