const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    title : {
        type : String ,
        required : true
    } , 
    content : {
        type : String ,
        required : true 
    } ,
    category : {
        type : String ,
        required : true  
    } ,
    user : {
        type : mongoose.Schema.Types.ObjectId ,
        ref  : 'user'
    }
} ,
 { timestamps : true }
 )

const Blog = mongoose.model('blogs' , blogSchema ) 

 module.exports = Blog 