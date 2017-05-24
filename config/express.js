var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function(){

    var app = express();

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.use(express.static('./public'));
    app.use('./bower_components',  express.static(__dirname + '/bower_components'));


    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routers')
        .into(app);


    app.set('view engine', 'ejs');
    app.set('views', './app/views');



    app.set('port', process.env.PORT || 3000);
    return app;
}