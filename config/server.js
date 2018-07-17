const handlebars = require('express-handlebars');
const path = require('path');

const express = require('express');
const bodyparser = require ('body-parser');

module.exports = (app) => {
    app.engine('.hbs', handlebars({
        extname: '.hbs',
        layoutsDir: 'views/layout',
        defaultLayout: 'Main'
    }))

    app.set('view engine', 'hbs');
    app.use(bodyparser.urlencoded( { extended:true } ));
    app.use(express.static(path.join(__dirname,'../public/css')));
    app.use(express.static(path.join(__dirname,'../public/pictures/layout')));
    app.use(express.static(path.join(__dirname,'../public/pictures/posts')));
    app.use(express.static(path.join(__dirname,'../public/scripts')));
    app.use(express.static(path.join(__dirname,'../public/bootstrap')));
    app.use(express.static(path.join(__dirname,'../public/jquery')))
    ;
}