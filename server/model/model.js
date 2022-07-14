const mongoose = require('mongoose')

var schema = new mongoose.Schema({
   name: {
    type: String,
    required: true
   },
   teacher: {
    type: String,
    required: true
   },
   chapters: {
    type: String,
    required: true
   }

}) 

const SubjectDB = mongoose.model('subjectdb', schema);

module.exports = SubjectDB;



