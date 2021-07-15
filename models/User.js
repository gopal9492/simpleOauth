const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  uId: {
    type: String,
   
  },
  firstName: {
    type: String,
   
  },
  lastName: {
    type: String,
  
  },
  image: {
    type: String,
  },
  email:{
type:String,
required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
},{
  versionKey:false
})

module.exports = mongoose.model('User', UserSchema)
