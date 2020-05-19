const express = require('express');
const dbModule = require('./db-module');
const alert = require('./view/alertMsg');

const router = express.Router();

router.post('/login', function(req, res) {
    let uid = req.body.uid;
    dbModule.getUserInfo(uid, function(user) {
        //console.log(user[0]);
        if (user === undefined) {
            let html = alert.alertMsg('아이디가 없습니다.', '/');
            res.send(html);
        } else {                // Login 성공
            //console.log(`${uid} login 성공`);
            req.session.userId = uid;
            req.session.name = user[0].name;
            //let html = alert.alertMsg(`${user[0].name} 님 환영합니다.`, '/monitoring');
            //res.send(html);
            res.redirect('/monitoring');
        }
    });
});

module.exports = router;