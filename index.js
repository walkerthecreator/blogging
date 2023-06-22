const express = require('express')
const app = express()
const path = require('path')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000
const db = require('./config/mongoose')
const { loginUser } = require('./controller/user')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(express.urlencoded( {extended : true} ))
app.use(cookieParser())

app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname , 'view'))

app.get('/' , (req , res)=>{
    res.render('homepage' , {message : ""})
})
app.post('/' , loginUser)

//feed
app.use('/user' , require('./routes/user'))
app.use('/blog', require('./routes/blog'))
// app.use('/blogs' , )

app.listen(port , ()=>{
    console.log("running on" + port )
})