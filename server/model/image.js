const mongoose = require('mongoose')
var img = new mongoose.Schema({
    name: {
     type: String,
     required: true
    },
    semister: {
     type: String,
     required: true
    },
    subject: {
        type: String,
        required: true
    }
 
 }) 
 
 const ImgaeDB = mongoose.model('imagedb', img);
 
 module.exports = ImgaeDB;