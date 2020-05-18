const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const alert = require('./view/alertMsg');
/*
const dbModule = require('./db-module');
const sm = require('./serial-module') */


const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));

//const userRouter = require('./userRouter');


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/popper', express.static(__dirname + '/node_modules/popper.js/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist')); // redirect jQuery
app.use('/fontawesome', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/js'));


//app.use('/user', userRouter);

/* app.get('/monitoring', function (req, res) {
    if (req.session.userId === undefined) {
        let html = alert.alertMsg('시스템을 사용하려면 먼저 로그인하세요.', '/');
        res.send(html);
    } else {
        dbModule.getCurrentSensor(function (sensor) {
            dbModule.getCurrentActuator(function (actuator) {
                wm.getWeather(function (weather) {
                    let navBar = template.navBar(true, weather, req.session.userName);
                    let menuLink = template.menuLink(0);
                    let view = require('./view/home');
                    let html = view.home(navBar, menuLink, sensor, actuator);
                    res.send(html);
                });
            });
        });
    }
}); */
app.get('/monitoring', function(req, res) {
        let view = require('./view/monitoring');
    res.send(view.monitoring());

});
app.get('/work', function(req, res) {
    let view = require('./view/work');
    res.send(view.work());
});
app.get('/index', function (req, res) {
    res.redirect('/');
});

app.get('*', function (req, res) {
    res.status(404).send('File not found');
});
app.listen(3002);