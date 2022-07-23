const axios = require('axios')

exports.homeRoute = (req, res) => {
    axios.get('http://localhost:3000/api/subjects')
    .then(function(response){
        res.render('index', {subjects: response.data})
    })
    .catch(err => {
        res.send(err)
    })
}

exports.subject = (req, res) => {
    axios.get('http://localhost:3000/api/lessons', {params : {id: req.query.id}})
    .then(function(response){
        res.render('subject', {lessons: response.data, lessonName : req.query.name})
    })
}

exports.questions = (req, res) => {
    axios.get('http://localhost:3000/api/images', {params : {id: req.query.id}})
    .then(function(response){
        res.render('questions', {images: response.data, imageName : req.query.name})
    })
}