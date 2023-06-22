const jwt = require('jsonwebtoken')

const authToken = (req , res , next) => {
    const { token } = req.cookies
    const decode = jwt.verify(token , process.env.JWT_SECRET , function(err , decode){
    if(err){
        throw new Error('User not Auth')
    }

    console.log(decode)
    req.user = decode
    next()
})
}

module.exports = authToken