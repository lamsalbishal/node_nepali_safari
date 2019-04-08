var express = require('express');
var router = express.Router();

var packageDetailModel = require('../modles/packageDetail.module');


function map_package_req(package,packageDetails){
	if(packageDetails.price)
	    package.price = packageDetails.price;
	if(packageDetails.priceDetail)
		package.priceDetail = packageDetails.priceDetail;
	if(packageDetails.overview)
        package.overview = packageDetails.overview;

    if(packageDetails.packageID)
    package.packageID = packageDetails.packageID;

	

	return package;
}

module.exports =   function(config){


router.get('/allpackagedetail',function(req,res,next)
	{
   
		packageDModel.find().exec(function(err,product){
			if(err)
			{
				return next(err);
			}
			res.json(product);
		})
	});

router.post('/addpackagedetail',function(req,res,next)
{
  console.log('i am at here',req.body);
   var newPackageAdd = new packageDetailModel();
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
