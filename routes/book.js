var express = require('express');
var router = express.Router();

var bookModel = require('../modles/Book.module');


function map_book_req(book,bookDetails){
	if(bookDetails.email)
	    book.title = bookDetails.email;
	if(bookDetails.from)
		book.from = bookDetails.from;
	if(bookDetails.choose)
        book.choose = bookDetails.choose;
    if(bookDetails.choose)
    book.choose = bookDetails.choose;
    if(bookDetails.date)
    book.date = bookDetails.date
    if(bookDetails.userID)
    book.userID = bookDetails.userID;

	

	return book;
}

module.exports =   function(config){


router.get('/allbook',function(req,res,next)
	{
   
		bookModel.find().exec(function(err,product){
			if(err)
			{
				return next(err);
			}
			res.json(product);
		})
	});

router.post('/addbook',function(req,res,next)
{
  console.log('i am at book',req.body);
   var newBookAdd = new bookModel();
   var newMapedBook = map_book_req(newBookAdd,req.body);
    newMapedBook.save(function(err,done){
      if(err){
        return next(err);
      }
      res.json(done);
    })




 
});

return router;
}
