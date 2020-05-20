const fs = require('fs');
const mysql = require('mysql');
const data = fs.readFileSync(__dirname + '/public/mysqlConf.json');
const conf = JSON.parse(data);

module.exports = {
    getConnection:     function() {
        const connection = mysql.createConnection({
            host: conf.host,
            user: conf.user,
            password: conf.password,
            port: conf.port,
            database: conf.database
        });
        connection.connect(function(err) {
            if (err) {
                console.log('mysql connection error :' + err);
            } else {
                //console.log('mysql is connected successfully.');
            }
        });
        return connection;
    },
    getUserInfo:    function(uid, callback) {
        const conn = this.getConnection();
        const sql = 'select * from user where uid = ?';   // DATE_FORMAT(createdDate, '%Y-%m-%d %T')

        conn.query(sql, uid, function(err, row) {
            if (err)
                console.log(err);
            else
                callback(row);
        });
        conn.end();
    }
}