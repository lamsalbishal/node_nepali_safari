var express = require('express');
var router = express.Router();

var packageModel = require('../modles/package.module');


function map_package_req(package,packageDetails){
	if(packageDetails.title)
	    package.title = packageDetails.title;
	if(packageDetails.description)
		package.description = packageDetails.description;
	if(packageDetails.image)
        package.image = packageDetails.image;

    if(packageDetails.homeID)
    package.homeID = packageDetails.homeID;

	

	return package;
}

module.exports =   function(config){


router.get('/allpackage',function(req,res,next)
	{
   
		packageModel.find().exec(function(err,product){
			if(err)
			{
				return next(err);
			}
			res.json(product);
		})
	});

	router.get('/:id',function(req,res,next){
		packageModel.find({
			homeID: req.params.id
		}, function(err, product) {
			if (err) {
				return next(err);
			}
			res.json(product);
		});
	})

	

router.post('/addpackage',function(req,res,next)
{
  console.log('i am at here',req.body);
   var newPackageAdd = new packageModel();
   var newMapedPackage = map_package_req(newPackageAdd,req.body);
    newMapedPackage.save(function(err,done){
      if(err){
        return next(err);
      }
      res.json(done);
    })




 
});

return router;
}
