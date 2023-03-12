const jwt = require('jsonwebtoken');
require('dotenv').config()
module.exports = function(req ,res , next) {
    try {
        let token = req.header('x-token');
        if (!token){
            return res.status(400).send("token not found")
        }
        let decode = jwt.verify(token , process.env.JWT_PASSWORD);
        req.user = decode.user;
        next();
        
    } catch (error) {
        console.log("error");
        return res.status(400).send("Unable to login middleware")
        
    }
    
}