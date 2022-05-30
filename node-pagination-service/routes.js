const express = require('express')
const events = require('./models/eventks')
const practiceModel = require('./models/practiceDB')
const app = express()

app.get('/allevents',async(req,res,next)=>{

    try {
    
    let result= await events.find({})
    console.log(result)

    res.send({result})
    } catch (error) {
     
        console.log(error)
    }
    

})


app.get('/practicedb', async(req,res,next)=>{
    try {
        let result = await practiceModel.find({});
        res.send({result})
    } catch (error) {
        console.log(error)
    }
})


module.exports = app;