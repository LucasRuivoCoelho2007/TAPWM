let express = require('express');
let app = express(); // Executando o express


app.set('view engine', 'ejs'); 

app.set('views', './app/views')

module.exports = app