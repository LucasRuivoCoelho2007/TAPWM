const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // impede recarregar a página

    const nome = formulario.elements.nome.value;
    const email = document.getElementById("email").value;
    const comentario = document.getElementById("comentario").value;

    const primeiraVez = document.querySelector(
        'input[name="primeiraVez"]:checked'
    );

    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Comentário:", comentario);

    if (primeiraVez) {
        if(primeiraVez.value == "sim"){
            alert("Volte sempre à esta página!");
        }
        else{
            alert("Que bom que você voltou a visitar essa página!");
        }
    } else {
       alert("Nenhuma opção selecionada");
    }
});