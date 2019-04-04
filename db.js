var mongoose = require('mongoose');

module.exports = function(config){
    mongoose.connect(config.app.mlabUrl,function(err,done){
        if(err){
            console.log('database is not ready');
        }else{
            console.log('database connection Successfully');
        }
    })
}