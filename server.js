require('dotenv').config( {path: 'config.env'} )
const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const connectDB = require('./server/database/connection')


const PORT = process.env.PORT || 8080;

app.use(morgan('tiny'))

connectDB();

app.use(bodyParser.urlencoded({extended: true}))

app.set("view engine", "ejs")

app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))

app.use('/', require('./server/route/router'))

app.listen(PORT, () => {
    console.log(`*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*`);
    console.log(`server is started & running on http://localhost:${PORT}`);
    console.log(`*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*`);
})