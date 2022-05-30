const express = require('express')
const mongoose = require('mongoose')
const eventsSchema = mongoose.Schema;
const app = express()

app.get('/allevents',async(req,res,next)=>{

    try {
    const eventtks = new eventsSchema({},{strict:false})
    const eventsCollection = mongoose.model('eventtks', eventtks)
    const events= eventsCollection.find({})
    console.log(events)

    res.send(events)
    } catch (error) {
     
        console.log(error)
    }
    

})




module.exports = app;