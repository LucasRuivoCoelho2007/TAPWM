let sql = require ('mssql');
require('dotenv').config();

module.exports = function(){
    const sqlConfig = {
        user: 'DS2612042',
        password: process.env.password,
        database:'LP2',
        server: 'APOLO',
        options:{
            encrypt: false,
            trustServerCertificate: true
        }
    }
return sql.connect(sqlConfig);
}