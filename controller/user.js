const User = require('../model/user')
const bcrypt = require("bcrypt")
const saltRound = 10

// @method GET
const getAddUser = (req , res) => {
    return res.render('signup')
}

// @route /user/signup
//@desc add a user
// @method POST
const addUser = async(req , res) => {
    const { email , name , password  } = req.body
    const number = Number(req.body.number)
    const user = await User.findOne({ email : email })

    if(!user){
        const hashedPassword = await bcrypt.hash(password , saltRound )
        // console.log(hashedPassword)
        try{
            const user = await User.create({
                name ,
                email ,
                password : hashedPassword ,
                phone : number })
                return res.status(400).send("added new user")
            }
        catch(err){
            console.log(err)
            }}
    res.send("email already exsist")
}

// @route /user/login
// @desc login user 
// @method POST
const loginUser = async ( req , res) => {
    const { email , password } = req.body
    const user = await User.findOne({ email })

    if(user){
        const matching = await bcrypt.compare( password , user.password )
         if(matching){
            res.cookie('user_id ', user._id)
            return res.redirect('/blog')
         }
         return res.render('homepage' , { message : "password did not matched"})
    }
    return res.redirect('/user/register')
}

// @route /user/login
// @desc  render homepage 
// @method GET
const getLoginUser = ( req , res) => {
        return res.render('homepage' , {message : ""})
}

module.exports = {getAddUser , addUser , loginUser , getLoginUser }
