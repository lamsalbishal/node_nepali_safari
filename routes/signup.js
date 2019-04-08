var express = require('express');
var router = express.Router();

var signUpModel = require('../modles/signup.module');


function map_signup_req(signup,signupDetails){
	if(signupDetails.fullname)
        signup.fullname = signupDetails.fullname;
        
	if(signupDetails.username)
        signup.username = signupDetails.username;
        
	if(signupDetails.password)
        signup.password = signupDetails.password;

    if(signupDetails.email)
    signup.email = signupDetails.email;

    if(signupDetails.address)
    signup.address = signupDetails.address;

    if(signupDetails.phone)
    signup.phone = signupDetails.phone;

    if(signupDetails.birthday)
    signup.birthday = signupDetails.birthday;
    
    if(signupDetails.gender)
    signup.gender = signupDetails.gender;

    if(signupDetails.choose)
    signup.choose = signupDetails.choose;

	return signup;
}

module.exports =   function(config){


router.get('/alluser',function(req,res,next)
	{
   
		signUpModel.find().exec(function(err,product){
			if(err)
			{
				return next(err);
			}
			res.json(product);
		})
	});

router.post('/addusers',function(req,res,next)
{
  console.log('i am at signup',req.body);
   var signupModule = new signUpModel();
   var newMapedSignup = map_signup_req(signupModule,req.body);
    newMapedSignup.save(function(err,done){
      if(err){
        return next(err);
      }
      res.json(done);
    })




 
});

return router;
}
