const Blog = require('../model/blog')

const getFeed = async(req , res) => {
        const blogs = await Blog.find().populate('user')
        console.log(blogs)
        return res.render('feed' , { blogs : blogs })

}

const addFeed = async( req , res) => {
        const {title , content , category } = req.body
        const { id }  = req.user 
        const blog = await Blog.create({title , content , category  , user : id})
        return res.status(201).redirect('/blog')
}

const getUserBlogs = async( req , res) => {
        const { id }  = req.user 
        const blog = await Blog.find({ user : id}).populate('user')
        console.log(blog)
        return res.render('profile' , { blogs : blog })
}

const deleteBlog = async(req , res) => {
    const { id } = req.params
    const blog = await Blog.deleteOne({_id : id}) 
    return res.status(200).redirect('/blog')
}

module.exports = { getFeed , addFeed , getUserBlogs , deleteBlog }