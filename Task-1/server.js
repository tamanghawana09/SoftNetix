const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const nodemailer = require('nodemailer')
const app = express()

dotenv.config()

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Server is running in the port ${port}`)
})