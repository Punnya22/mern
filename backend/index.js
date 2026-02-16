//import
const express=require("express")
require("./connection")
var stuModel=require("./model/student")
var cors=require('cors')

//initialize
const app = express()
app.use(cors())

//midd
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post('/add',async(req, res) => {
  await stuModel(req.body).save()
  res.send('data added')
})

//view
app.get('/view',async(req, res) => {
  var data=await stuModel.find()
  res.send(data)
})

//delet
app.delete('/remove/:id',async(req,res)=>{
  await stuModel.findByIdAndDelete(req.params.id)
  res.send("data deleted")
})

//update
app.put('/edit/:id',async(req,res)=>{
  await stuModel.findByIdAndUpdate(req.params.id,req.body)
  res.send("data update")
})

//port setting
app.listen(3011, () => {
  console.log('Server is running on http://localhost:3011')
})
