/**
 * Created by rpatel on 12/15/13.
 */

module.exports = function(app){


    var Controller = {
        name: 'BookController'
    };
    var BookModel = app.models.BookModel;

    Controller.list = function(req, res){

        //Call list function
        BookModel.list({}, function(error, books){

            //html & json response
            res.format({
                html: function(){
                    if(error) {
                        res.render('books/bookshelf', {error: error});
                    } else {
                        res.render('books/bookshelf', {books: books});
                    }
                },
                json: function(){
                    if(error) {
                        res.send(error.code, error);
                    } else {
                        res.send(200, books);
                    }
                }
            });


        });

    }

    return Controller;


}