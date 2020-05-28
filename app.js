const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const alert = require('./view/alertMsg');
const dbModule = require('./db-module');
const template = require('./view/template');
/*const sm = require('./serial-module') */


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
const userRouter = require('./userRouter');

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/popper', express.static(__dirname + '/node_modules/popper.js/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist')); // redirect jQuery
app.use('/fontawesome', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/js'));
app.use(express.static(__dirname + '/public'));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: new FileStore({ logFn: function () { } })
}));
app.use('/user', userRouter);

app.get('/monitoring', function (req, res) {
    if (req.session.usernumber === undefined) {
        let html = alert.alertMsg('시스템을 사용하려면 먼저 로그인하세요.', '/');
        res.send(html);
    } else {
        dbModule.getSensor(function(sensor){
            let navBar = template.navBar(req.session.name);
            let view = require('./view/monitoring');
            let html = view.monitoring(navBar, sensor);


            res.send(html);
        });
    }
});
app.get('/work', function (req, res) {
    if (req.session.usernumber === undefined) {
        let html = alert.alertMsg('시스템을 사용하려면 먼저 로그인하세요.', '/');
        res.send(html);
    } else {
        let navBar = template.navBar(req.session.name);
        let view = require('./view/work');
        let html = view.work(navBar);
        res.send(html);
    }
});

app.get('*', function (req, res) {
    res.status(404).send('File not found');
});
app.listen(3000);