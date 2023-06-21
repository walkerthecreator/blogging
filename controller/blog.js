const Blog = require('../model/blog')

const getFeed = async(req , res) => {
    if(req.cookies.user_id){
        const blogs = await Blog.find().populate('user')
        return res.render('feed' , { blogs : blogs })
    }
    return res.redirect('user/login')
}

const addFeed = async( req , res) => {
    if(req.cookies.user_id){
        const {title , content , category } = req.body
        const blog = await Blog.create({title , content , category  , user : req.cookies.user_id})
        return res.status(201).redirect('/blog')
    }
    return res.redirect('user/login')
}

const getUserBlogs = async( req , res) => {
    if(req.cookies.user_id){
        const blog = await Blog.find({ user : req.cookies.user_id}) 
        return res.render('profile' , { blogs : blog })
    }
    return res.redirect('user/login')
    
}

const deleteBlog = async(req , res) => {
    const { id } = req.params
    const blog = await Blog.deleteOne({_id : id}) 
    return res.status(200).redirect('/blog')
}

module.exports = { getFeed , addFeed , getUserBlogs , deleteBlog }