const mongo = require("mongoose")
const express = require("express")
const routes = require("./routes")
const env = require('dotenv')
const cors = require('cors')
const connectDB =async ()=>{
  await mongo.connect(`mongodb://127.0.0.1:27020/viagog`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  console.log("database connected",mongo.connection.port)
}
connectDB();
const app = express()
app.use(cors());

app.get('/',(req,res)=>{
    res.send('hello');
})

app.use(routes)

app.listen(4001,()=>{
    console.log('App is running on port 4001')
})