let express = require('express')
let jwt= require('jsonwebtoken')
let verify = express.Router()
verify.use('',(req,res,next)=>{
    const token = req.get('Authorization')
    console.log(token)
    if(!token)return res.status(401).send('Access Denied')
    try{
let userdata=jwt.verify(token,"saleem")
console.log(userdata)
req.name=userdata.name
next()
// res.status(200).send(userdata)
    }
    catch(err){
res.status(403).send('session expired')
    }
})
module.exports = verify