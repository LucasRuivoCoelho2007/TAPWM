let app = require('./app/config/server'); //Carregando o módulo do servidor

let rotaHome = require('./app/routes/home'); //Só está definindo as rotas
rotaHome(app); //Está executando

let rotaAdicionarUsuario = require('./app/routes/adicionar_usuario'); //Só está definindo as rotas
rotaAdicionarUsuario(app); //Está executando

let rotaHistoria = require('./app/routes/historia'); //Só está definindo as rotas
rotaHistoria(app); //Está executando

let rotaCursos = require('./app/routes/cursos'); //Só está definindo as rotas
rotaCursos(app); //Está executando

let rotaProfessores = require('./app/routes/professores'); //Só está definindo as rotas
rotaProfessores(app); //Está executando


app.listen(3000, function()
{
    console.log("Servidor iniciado!");
});