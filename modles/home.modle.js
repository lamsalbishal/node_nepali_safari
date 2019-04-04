var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var homeSchema = new Schema({
    title: {
        type:String,
        
    },
    
    description: String,
    image:String,

},{
    timestamps:true
});

module.exports = mongoose.model('home',homeSchema);