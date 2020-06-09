const fs = require('fs');
const mysql = require('mysql');
const data = fs.readFileSync(__dirname + '/public/mysqlConf.json');
const conf = JSON.parse(data);

module.exports = {
    getConnection: function () {
        const connection = mysql.createConnection({
            host: conf.host,
            user: conf.user,
            password: conf.password,
            port: conf.port,
            database: conf.database
        });
        connection.connect(function (err) {
            if (err) {
                console.log('mysql connection error :' + err);
            } else {
                //console.log('mysql is connected successfully.');
            }
        });
        return connection;
    },
    getUserInfo: function (uid, callback) {
        const conn = this.getConnection();
        const sql = 'select * from user where uid=?';   // DATE_FORMAT(createdDate, '%Y-%m-%d %T')

        conn.query(sql, uid, function (err, row) {
            if (err)
                console.log(err);
            else
            {
                callback(row);
            }
        });
        conn.end();
    },
    getUsers:  function(callback) {
        const conn = this.getConnection();
        
        const sql = `SELECT * from user`;   // limit offset, 갯수

        conn.query(sql, function(err, rows) {
            if (err)
                console.log(err);
            else
                callback(rows);
        });
        conn.end();
    },
    registerUser:    function(params, callback) {
        const conn = this.getConnection();
        const sql = `insert into user(uid, name) values (?, ?)`;

        conn.query(sql, params, function(err, result) {
            if (err)
                console.log(err);
            else {
                console.log('registerUser(),', result);
                callback();
            }
        });
        conn.end();
    },

    updateUser: function(params, callback) {
        const conn = this.getConnection();
        const sql = `update user set deptId = ?, text = ? where uid = ?`;

        conn.query(sql, params, function(err, result) {
            if (err)
                console.log(err);
            else
                callback();
        });
        conn.end();
    },
    deleteUser: function(uid, callback) {
        const conn = this.getConnection();
        const sql = `DELETE FROM user WHERE uid=? `;
        conn.query(sql, uid, function(err, result) {
            if (err)
                console.log(err);
            else
                callback();
        });
        conn.end();
    },
    getSensor: function (callback) {
        const conn = this.getConnection();
        const sql = `SELECT * FROM sensor ORDER BY sensorid DESC LIMIT 1`;
        conn.query(sql, function (err, row) {
            if (err)
                console.log(err);
            else
                callback(row);
        });
        conn.end();
    },
    insertSensor: function(temperature, humidity, air, illuminance, callback) {
        const conn = this.getConnection();        
        const sql = `INSERT INTO sensor (temperature, humidity, air, illuminance) VALUES (?,?,?,?)`;
        let params = [temperature, humidity, air, illuminance];
        console.log(params);
        conn.query(sql, params, function(err) {
            if (err) {
                console.log(err);
            } else {
                callback();
            }
        });
        conn.end();
    }
}