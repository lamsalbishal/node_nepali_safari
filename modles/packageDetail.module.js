var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var PackageDetail = new Schema({
    price:Number,
    priceDetail:String,
    overview:String,
    packageID:String
},{timestamps:true})

module.exports = mongoose.model('packagedetail',PackageDetail);