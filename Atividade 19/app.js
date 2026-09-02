let app = require('./app/config/server')
let rotaHome = require('.app/routes/home')
let rotaCursos = require('./app/routes/cursos')
let rotaProfessores = require('./app/routes/professores')
let rotaHistoria = require('./app/routes/historia')
let rotaAdicionarUsuario = require('./app/routes/adicionar_usuario')

rotaHome(app)
rotaCursos(app)
rotaProfessores(app)
rotaHistoria(app)
rotaAdicionarUsuario(app)

app.listen(3000, function(){
    console.log("Servidor carregado!");
});


