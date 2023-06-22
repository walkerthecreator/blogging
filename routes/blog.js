const {getFeed, addFeed, getUserBlogs, deleteBlog} = require('../controller/blog')

const express = require('express')
const authToken = require('../middleware/auth')
const router = express.Router()

// router.get('/' , getFeed )
// router.post('/' , addFeed)
router.use(authToken)
router.route('/').get( getFeed ).post( addFeed )

router.get('/myprofile' , getUserBlogs )
router.get('/delete/:id' , deleteBlog )


module.exports = router