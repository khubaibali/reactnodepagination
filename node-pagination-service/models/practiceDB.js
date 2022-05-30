const mongo = require('mongoose');

const practiceSchema= new mongo.Schema({},{strict:false});

const practiceModel =  mongo.model('practiceDB',practiceSchema);

module.exports = practiceModel