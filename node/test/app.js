var express = require("express");
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'pug')

app.get('/', function(request, response){
    response.render('new-user')
})

app.post('/create-new-user', function(request,response){
    // let's examine the data from the query string
    // using request.query! We will have two keys of first and last
    // since those are the values of the name attributes from our form
    response.send(request.body)
});

app.listen(3000, function(){
    console.log("The server has started on port 3000. Head to localhost:3000 in the browser and see what's there!")
})