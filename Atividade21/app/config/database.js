require('dotenv').config();
const sql = require('mssql');

const sqlConfig = {
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.database,
    server: process.env.server,
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

async function connectDB() {
    try {
        const pool = await sql.connect(sqlConfig);

        console.log('Conectado ao banco de dados');

        return pool;
    } catch (err) {
        console.error('Erro ao conectar com o banco:', err);
        throw err;
    }
}

module.exports = {
    connectDB
};
