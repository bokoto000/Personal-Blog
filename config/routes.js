blogController = require('../controllers/blogController');
calendarController = require('../controllers/calendarController');


module.exports = (app) =>{
    app.get('/calendar',calendarController.getAll);
    app.get('/calendar/count',calendarController.getCount);
    app.post('/calendar/addEvent', calendarController.addEvent);
    app.get('/calendar/events',calendarController.getEvents);
    app.get('/calendar/events/removeEvent',calendarController.removeEvent);
    app.get('/posts/:name',blogController.getPost);
    app.get('/projects',blogController.getProjects);
    app.get('/about',blogController.getAbout);
    app.get('/contact',blogController.contact);
    app.get('/',blogController.getRecentAndAll);
    app.post('/search',blogController.search);
}