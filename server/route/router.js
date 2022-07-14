const express = require('express')
const route = express.Router()
const services = require('../services/render')
const controller = require('../controller/controller')


//Pages

route.get('/', services.homeRoute)

route.get('/subject', services.subject)

route.get('/questions', services.questions)


// API

route.post('/api/subjects', controller.create)
route.get('/api/subjects', controller.find)

route.post('/api/lessons', controller.createLesson)
route.get('/api/lessons', controller.findLesson)

route.post('/api/images', controller.createImage)
route.get('/api/images', controller.findImage)

module.exports = route