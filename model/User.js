const {Schema, default: mongoose} =require('mongoose')
const User = new Schema({
    email:String,
    name:String
}) 
userDB = mongoose.model('testuser',User)
exports.userDB = userDB