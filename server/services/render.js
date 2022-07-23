const axios = require('../helpers/axios')

exports.homeRoute = (req, res) => {
    axios.get('/api/subjects')
    .then(function(response){
        res.render('index', {subjects: response.data})
    })
    .catch(err => {
        res.send(err)
    })
}

exports.subject = (req, res) => {
    axios.get('/api/lessons', {params : {id: req.query.id}})
    .then(function(response){
        res.render('subject', {lessons: response.data, lessonName : req.query.name})
    })
}

exports.questions = async(req, res) => {
   try {
   const getImage = axios.get('/api/images', {params : {id: req.query.id}})
   const getLessons = axios.get('/api/lessons', {params : {id: req.query.id}})

   const [images, lessons] =  await Promise.all([getImage, getLessons])

   console.log('images', images.data)
   console.log('lessons', lessons.data)
    
   res.render('questions', {images: images.data, lessons: lessons.data,imageName : req.query.name})
   } catch (error) {
        res.render('questions', {error: 'Not found'})
   }
}