module.exports = function(err , req , res , next){
    res.status(err.statusCode || 500).json({error : err || 'An error occurred'})
    console.log(err)
    next()
}