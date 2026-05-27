var imgstatus = document.getElementById("status");
var imagem = document.getElementById("imagem");

function abrir(){
    imagem.src = "janela_aberta.png";
    imgstatus.innerHTML = "aberta";
}

function fechar(){
    imagem.src = "janela_fechada.png";
    imgstatus.innerHTML = "fechada";
}

function quebrar(){
    imagem.src = "janela_quebrada.png";
    imgstatus.innerHTML = "quebrada";
}