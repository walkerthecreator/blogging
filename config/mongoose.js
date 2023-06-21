const mongoose = require('mongoose')
//connecting with mongodb blogging
mongoose.connect('mongodb://127.0.0.1:27017/blogging')

const db = mongoose.connection

db.on('error' , (err)=>{
    console.log('error connecting db' + err)
})

db.once('open' , ()=>{
    console.log('connected with db')
})

