function promptteste(){
    let escolha = prompt("Faça sua escolha (pedra = 1, papel = 2,  tesoura = 3)", "Digite aqui");

    escolha_computador = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    if(escolha == 1 && escolha_computador == 3){
        escolha = "pedra"
        escolha_computador = "tesoura"
        alert("Sua escolha: " + escolha)
        alert("Escolha do computador: " + escolha_computador)
        alert("Você venceu!")
    }
    else if(escolha == 1 && escolha_computador == 1){
        escolha = "pedra"
        escolha_computador = "pedra"
        alert("Sua escolha: " + escolha)
        alert("Escolha do computador: " + escolha_computador)
        alert("Fizeram a mesma escolha, empate!")
    }
     else if(escolha == 1 && escolha_computador == 2){
        escolha = "pedra"
        escolha_computador = "papel"
        alert("Sua escolha: " + escolha)
        alert("Escolha do computador: " + escolha_computador)
        alert("Você perdeu!")
    }
    else if(escolha == 2 && escolha_computador == 1){
        escolha = "papel"
        escolha_computador = "pedra"
        alert("Sua escolha: " + escolha)
        alert("Escolha do computador: " + escolha_computador)
        alert("Você venceu!")
    }
    else if(escolha == 2 && escolha_computador == 2){
        escolha = "papel"
        escolha_computador = "papel"
        alert("Sua escolha: " + escolha)
        alert("Escolha do computador: " + escolha_computador)
        alert("Fizeram a mesma escolha, empate!")
    }
    else if(escolha == 2 && escolha_computador == 3){
        escolha = "papel"
        escolha_computador = "tesoura"
        alert("Sua escolha: " + escolha)
        alert("Escolha do computador: " + escolha_computador)
        alert("Você perdeu!")
    }
    else if(escolha == 3 && escolha_computador == 1){
        escolha = "tesoura"
        escolha_computador = "pedra"
        alert("Sua escolha: " + escolha)
        alert("Escolha do computador: " + escolha_computador)
        alert("Você perdeu!")
    }
    else if(escolha == 3 && escolha_computador == 2){
        escolha = "tesoura"
        escolha_computador = "papel"
        alert("Sua escolha: " + escolha)
        alert("Escolha do computador: " + escolha_computador)
        alert("Você venceu!")
    }
    else if(escolha == 3 && escolha_computador == 3){
        escolha = "tesoura"
        escolha_computador = "tesoura"
        alert("Sua escolha: " + escolha)
        alert("Escolha do computador: " + escolha_computador)
        alert("Fizeram a mesma escolha, empate!")
    }
    else{
        print("Valor inválido")
    }
}