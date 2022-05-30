const mongo = require('mongoose');


const eventSchema = new mongo.Schema({},{strict:false})

const eventtks = mongo.model('eventtks',eventSchema)


module.exports = eventtks;
