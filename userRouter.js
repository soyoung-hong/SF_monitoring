const express = require('express');
const dbModule = require('./db-module');
const alert = require('./view/alertMsg');
const template = require('./view/template');
const router = express.Router();

router.post('/login', function (req, res) {
    let uid = parseInt(req.body.usernumber)
    dbModule.getUserInfo(uid, function (user) {
        if (user[0] !== undefined) {
            console.log(`${uid} login 성공`);
            req.session.usernumber = uid;
            req.session.name = user[0].name;
            let url = `/work/uid/${user[0].uid}`
            let html = alert.alertMsg(`${user[0].name} 님 환영합니다.`, url);
            res.send(html);

        } else if (user[0] === undefined) {
            console.log(`login 실패`);
            let html = alert.alertMsg('아이디가 없습니다.', '/');
            res.send(html);
        }
    });
});
router.get('/register', function(req, res) {    // 관리자로 로그인해야 할 수 있음.
    if (req.session.usernumber !== 0) {
        let url = `/work/uid/${req.session.usernumber}`
        let html = alert.alertMsg(`권한이 없습니다.`, url);
        res.send(html);
    } else {
            let navBar = template.navBar(req.session.name, req.session.uid);
            let view = require('./view/registerUser');
            let html = view.registerUser(navBar);
            res.send(html);  
        }

});
router.post('/register', function(req, res) {
    let uid = req.body.uid;
    let name = req.body.name;
    dbModule.getUserInfo(uid, function(row) {
            if (row[0] === undefined){
                let params = [uid, name];
                dbModule.registerUser(params, function(){
                    res.redirect(`/admin`);
                });
            }      
            else{
                let html = alert.alertMsg(`${uid} 아이디가 중복입니다.`, '/user/register');
                res.send(html);
            }   
});
});

router.get('/update/uid/:uid', function (req, res) {    

    if (req.session.usernumber !== 0) {
        let url = `/work/uid/${user[0].uid}`
        let html = alert.alertMsg(`권한이 없습니다.`, url);
        res.send(html);
    } else {
        dbModule.getUserInfo(req.params.uid, function (user) {
            let navBar = template.navBar(req.session.name, req.session.uid);
            let view = require('./view/updateUser');
            let html = view.updateUser(navBar, user);
            res.send(html);

        });
    }
});
router.post('/update', function (req, res) {
    let uid = req.body.uid;
    let name = req.body.name;
    let deptId = req.body.deptId;
    let text = req.body.text;

dbModule.getUserInfo(uid, function(user){
    let params = [deptId[0], text, uid];
    dbModule.updateUser(params, function () {
        res.redirect(`/admin`);
    });
});
});
router.get('/delete/uid/:uid', function(req, res) {     // 관리자로 로그인해야 할 수 있음.
    if (req.session.usernumber !== 0) {
        
        let html = alert.alertMsg(`권한이 없습니다.`, '/');
        res.send(html);
    }  else {
        dbModule.getUserInfo(req.params.uid, function (user) {
            let navBar = template.navBar(req.session.name, req.session.uid);
            let view = require('./view/deleteUser');
            let html = view.deleteUser(navBar, user);  
            res.send(html);
        });
    }
});
router.post('/delete', function(req, res) {
    let uid = req.body.uid;
    dbModule.deleteUser(uid, function() {
        res.redirect(`/admin`);
    });
});


router.get('/logout', function (req, res) {
    req.session.destroy();
    res.redirect('/');
});
module.exports = router;