const mongoose=require('mongoose')

mongoose.connect("mongodb+srv://punnya:punnya@cluster0.kh0hi1n.mongodb.net/kmctb2?appName=Cluster0")
.then(()=>{
    console.log('connected!')
})
.catch((err)=>{
    console.log("err",err)
})