module.exports = function(err , req , res , next){
    res.status(err.statusCode).json({error : err.type || 'An error occurred'})
    next()
}