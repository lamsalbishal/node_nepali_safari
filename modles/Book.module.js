var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BooKModule = new Schema({
  email:String,
  from:String,
  choose:String,
  totalPeople:Number,
  date:String,
  userID:String
},
{
    timestamps:true
}
)

module.exports = mongoose.model('book',BooKModule);