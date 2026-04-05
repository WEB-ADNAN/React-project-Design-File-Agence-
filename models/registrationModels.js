const mongoose = require('mongoose')
const {Schema} = mongoose

const registrationSchema = new Schema({
    username:String,
    email:String,
    number:String
})

module.exports = mongoose.model('Testing', registrationSchema)