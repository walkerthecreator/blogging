// model
const { getAddUser , addUser, loginUser, getLoginUser } = require('../controller/user')
const express = require('express')
const router = express.Router()

// localhost:3000/user/
// route.get('/' ,userPage)

//login
router.get('/login' , getLoginUser)
router.post('/login' , loginUser )   

//'/user/login'
router.get('/register' , getAddUser)
router.post('/register' , addUser)

// route.get('/update/:id' , updateUser )

module.exports = router