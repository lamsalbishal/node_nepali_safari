var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Package = new Schema({
    title:String,
    description : String,
    image:String,
    homeID:String,

},{timestamps:true})

module.exports = mongoose.model('package',Package);
