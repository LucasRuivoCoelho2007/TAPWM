const { connectDB } = require('../config/database.js');

module.exports = function(app) {
    app.get('/informacao/professores', async function(req, res) {
        try {
            const pool = await connectDB();

            const results = await pool
                .request()
                .query('SELECT * FROM PROFESSORES');

            res.render('informacao/professores', {
                profs: results.recordset
            });

        } catch (err) {
            console.error('Erro ao buscar professores:', err);
            res.status(500).send('Erro ao buscar professores');
        }
    });
};
