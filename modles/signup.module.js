var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Signup = new Schema({

    fullname:String,
    username:String,
    password:String,
    email:String,
    address:String,
   

},{
    timestamps:true
})

module.exports = mongoose.model('signup',Signup);


