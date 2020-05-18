const express = require('express');
const dbModule = require('./db-module');
const alert = require('./view/alertMsg');

const router = express.Router();
router.get('/list/page/:page', function(req, res) {        // 로그인만 하면 누구나 할 수 있음.
    if (req.session.userId === undefined) {
        let html = alert.alertMsg(`시스템을 사용하려면 먼저 로그인하세요.`, '/');
        res.send(html);
    } else {
        let pageNo = parseInt(req.params.page);
        wm.getWeather(function(weather) {
            let navBar = template.navBar(false, weather, req.session.userName);
            let menuLink = template.menuLink(3);
            dbModule.getUsers(pageNo, function(users) {
                dbModule.getUserCount(function(result) {        // 페이지 지원
                    let totalPage = Math.ceil(result[0].count / 10);
                    let view = require('./view/listUser');
                    let html = view.listUser(navBar, menuLink, users, totalPage, pageNo);
                    //console.log(rows);
                    res.send(html);
                });
            });
        });
    }
});

router.post('/login', function(req, res) {
    let uid = req.body.uid;

    dbModule.getUserInfo(uid, function(user) {
        //console.log(user[0]);
        if (user === undefined) {
            let html = alert.alertMsg('없는 번호 입니다.', '/');
            res.send(html);
        }
        else {                // Login 성공
            //console.log(`${uid} login 성공`);
            req.session.userId = uid;
            req.session.userName = user[0].name;
            //let html = alert.alertMsg(`${user[0].name} 님 환영합니다.`, '/home');
            //res.send(html);
            res.redirect('/home');
        }
    });
});
router.get('/logout', function(req, res) {
    req.session.destroy();
    res.redirect('/');    
});

module.exports = router;