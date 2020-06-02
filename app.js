const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const alert = require('./view/alertMsg');
const dbModule = require('./db-module');
const template = require('./view/template');
const request = require('request');
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
    request({ url: "http://172.17.4.61/", timeout: 2000 }, function (err, respone, result) {
        //console.log("request 속 성공!");
        if (!err && respone.statusCode == 200) {
            console.log("접속 성공!");
            let body = JSON.parse(result);
            console.log(body);
            temperature = body.temp;
            humidity = body.humi;
            air = body.TVOC;
            illuminance = body.cds;
            dbModule.insertSensor(temperature, humidity, air, illuminance, function () {
                dbModule.getSensor(function (sensor) {
                    let navBar = template.navBar(req.session.name);
                    let view = require('./view/monitoring');
                    let html = view.monitoring(navBar, sensor);
                    res.send(html);
                });
            });
        }
        else {
            console.log("아두이노 요청 2초 초과");
            console.log(err);
            this.abort();
        }
    });
    /*
    if (req.session.usernumber === undefined) {
        let html = alert.alertMsg('시스템을 사용하려면 먼저 로그인하세요.', '/');
        res.send(html);
    } else {
    }
    */
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
app.get('/admin', function(req, res) {        // 로그인만 하면 누구나 할 수 있음.
    if (req.session.usernumber !== 0) {
        let html = alert.alertMsg(`권한이 없습니다.`, '/work');
        res.send(html);
    } else {
        dbModule.getUsers(function(user) {
            let navBar = template.navBar(req.session.name);
            let view = require('./view/admin');
            let html = view.admin(navBar,user);
            res.send(html);
            
        });
    }
});

app.get('*', function (req, res) {
    res.status(404).send('File not found');
});
app.listen(3000);