const mongoose = require('mongoose')
var ls = new mongoose.Schema({
    name: {
     type: String,
     required: true
    },
    chapter: {
     type: String,
     required: true
    },
    length: {
     type: String,
     required: true
    },
    link: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    }
 
 }) 
 
 const LessonDB = mongoose.model('lessondb', ls);
 
 module.exports = LessonDB;