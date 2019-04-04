var express = require('express');
var router = express.Router();

var homeModel = require('../modles/home.modle');


function map_product_req(product,productDetails){
	if(productDetails.title)
	    product.title = productDetails.title;
	if(productDetails.description)
		product.description = productDetails.description;
	if(productDetails.image)
		product.image = productDetails.image;

	

	return product;
}

module.exports =   function(config){
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/allhome',function(req,res,next)
	{
   
		homeModel.find().exec(function(err,product){
			if(err)
			{
				return next(err);
			}
			res.json(product);
		})
	});

router.post('/home',function(req,res,next)
{
  console.log('i am at here',req.body);
   var newProductAdd = new homeModel();
   var newMapedProduct = map_product_req(newProductAdd,req.body);
    newMapedProduct.save(function(err,done){
      if(err){
        return next(err);
      }
      res.json(done);
    })




 
});

return router;
}
