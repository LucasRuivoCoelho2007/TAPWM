function func1(){
    let f1_1 = document.getElementById("f1_1").value;
    let f1_2 = document.getElementById("f1_2").value;
    let f1_3 = document.getElementById("f1_3").value;
    let resp1 = document.getElementById("resp1");

    vetor = [Number(f1_1), Number(f1_2), Number(f1_3)];
    let maior = vetor[0];
    try{
        for (i = 0; i <= 2; i++){
            if (vetor[i] > maior){
                maior = vetor[i];
            }
        }  

        resp1.innerText = maior;

    }catch(error){
        resp1.innerText = error;
    }
}

function func2(){
    let f2_1 = document.getElementById("f2_1").value;
    let f2_2 = document.getElementById("f2_2").value;
    let f2_3 = document.getElementById("f2_3").value;
    let resp2 = document.getElementById("resp2");

    vetor = [Number(f2_1), Number(f2_2), Number(f2_3)];

    try{
        for(j = 0; j < vetor.length - 1; j++){
            for (i = 0; i < vetor.length - 1; i++){
                if (vetor[i] > vetor[i+1]){
                    temp = vetor[i + 1];
                    vetor[i + 1] = vetor[i];
                    vetor[i] = temp;
                }
            } 
        }
        resp2.innerText = vetor;

    }catch(error){
        resp1.innerText = error;
    }
}


function func3(){
    let f3_1 = document.getElementById("f3_1").value;
    let resp3 = document.getElementById("resp3");

    let palavra = [];
    
    for(let i = 0; i < f3_1.length; i++){
        palavra[i] = f3_1.charAt(i);
    }

    let palavra_inicial = palavra.slice(); // cópia real

    for(let j = 0; j < Math.floor(palavra.length / 2); j++){
        let temp = palavra[j];
        palavra[j] = palavra[palavra.length - j - 1];
        palavra[palavra.length - j - 1] = temp;
    }

    if(JSON.stringify(palavra_inicial) === JSON.stringify(palavra)){
        resp3.innerText = "Palíndromo";
    }else{
        resp3.innerText = "Não é palíndromo";
    }
}

function func4(){
    let palavra1 = document.getElementById("f4_1").value;
    let palavra2 = document.getElementById("f4_2").value;
    let resp4 = document.getElementById("resp4");

    // validação
    if(!palavra1 || !palavra2){
        resp4.innerText = "erro";
        return;
    }

    // verificar subconjunto (substring)
    if(palavra1.toLowerCase().includes(palavra2.toLowerCase())){
        resp4.innerText = "é um subconjunto";
    }else{
        resp4.innerText = "não é um subconjunto";
    }
}
function func5(){
    let data = document.getElementById("f5_1").value;
    let resp5 = document.getElementById("resp5");

    if(!data){
        resp5.innerText = "erro";
        return;
    }

    let diaNumero = new Date(data).getDay();

    let dias = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ];

    resp5.innerText = dias[diaNumero];
}