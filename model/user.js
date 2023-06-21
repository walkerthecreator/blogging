const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : {
        type : String ,
        required : [true , "Please enter name"]
    }, 
    email : {
        type : String ,
        required : [true , "Please enter email"] ,
        unique : true
    } ,
    password : {
        type : String ,
        required : [true , "Please enter password"]
    } ,
    phone : {
        type : Number ,
        required : [true , "Please enter phone"]
    } 
}, {
    timestamps : true
})

const User = mongoose.model('user' , userSchema )

module.exports = User 

