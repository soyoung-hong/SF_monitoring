const express = require('express');
const dbModule = require('./db-module');
const alert = require('./view/alertMsg');
const template = require('./view/template');
const router = express.Router();

router.post('/login', function(req, res) {
    let uid = parseInt(req.body.usernumber)
    dbModule.getUserInfo(uid, function(user) {
        if (user[0] !== undefined) {
            console.log(`${uid} login 성공`);
            req.session.usernumber = uid;
            req.session.name = user[0].name;
            let html = alert.alertMsg(`${user[0].name} 님 환영합니다.`, '/monitoring');
            res.send(html);

        } else if (user[0] === undefined)  {   
            console.log(`login 실패`);
            let html = alert.alertMsg('아이디가 없습니다.', '/');
            res.send(html);
        }
    });
});
router.get('/logout', function(req, res) {
    req.session.destroy();
    res.redirect('/');    
});

module.exports = router;