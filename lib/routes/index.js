
/*
 * GET home page.
 */

/*
exports.index = function(req, res){
  res.render('index', { title: 'Express' });

};
*/


module.exports = function(app) {

    var BookController = app.controllers.BookController;


    app.get('/', function(req, res) {
        res.redirect('/books');
    });

    app.get('/books', BookController.list);

}
