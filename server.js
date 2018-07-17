const express = require('express');
const database = require ('./config/database');
const handlebars = require ('express-handlebars');

const env = 'development';
const settings = require ('./config/settings')[env];
const server = require('./config/server');
const routes = require('./config/routes');
const posts = require('./config/posts').posts;



database(settings);

const app = express();
server(app);
routes(app);

app.engine('hbs',handlebars({
    extname: '.hbs',
    layoutsDir: 'views/layouts',
    defaultLayout: 'main'
}));

app.set('view engine', 'hbs');

const port = settings.port;
const host = settings.ip;


console.log(host+" : "+port);

app.listen(port, () =>console.log('Server is running on port'));