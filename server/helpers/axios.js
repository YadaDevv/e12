const ax = require('axios')
// import ax from 'axios'

const axios = ax.create({
    baseURL: process.env.BASE_URL
})

module.exports = axios