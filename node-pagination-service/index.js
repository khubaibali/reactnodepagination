const mongo = require("mongoose")
const express = require("express")
const routes = require("./routes")

const connectDB =async ()=>{
   mongo.connect('mongodb://localhost:27020/viagog',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  console.log("database connected")
)

}
connectDB();

const app = express()

app.get('/',(req,res)=>{
    res.send('hello');
})

app.use(routes)

app.listen(4001,()=>{
    console.log('App is running on port 4001')
})