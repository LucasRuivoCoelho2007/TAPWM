let idade = [];
let sexo = [];
let opiniao = [];

let i = 0;

function proximo(){
    idade[i] = Number(document.getElementById("idade").value);
    sexo[i] = document.getElementById("sexo").value;
    opiniao[i] = Number(document.getElementById("opiniao").value);

    i++;

    if(i < 45){
        document.getElementById("contador").innerText = "Pessoa " + (i + 1);

        document.getElementById("idade").value = "";
    } else {
        calcular();
    }
}

function calcular(){
    let maior_idade = Math.max(...idade);
    let menor_idade = Math.min(...idade);

    let qtd_pessimo = 0;
    let qtd_otimo_bom = 0;
    let numero_homens = 0;
    let numero_mulheres = 0;
    let numero_outros = 0;

    for (let i = 0; i < 45; i++){
        if (opiniao[i] === 1) qtd_pessimo++;
        if (opiniao[i] === 3 || opiniao[i] === 4) qtd_otimo_bom++;

        if (sexo[i] === "masculino") numero_homens++;
        else if (sexo[i] === "feminino") numero_mulheres++;
        else numero_outros++;
    }

    let porcentagem = (qtd_otimo_bom / 45) * 100;

    document.getElementById("card").innerHTML = `
        <h2>Resultado</h2>
        Maior idade: ${maior_idade} <br>
        Menor idade: ${menor_idade} <br>
        Péssimo: ${qtd_pessimo} <br>
        % Ótimo/Bom: ${porcentagem.toFixed(2)}% <br>
        Homens: ${numero_homens} <br>
        Mulheres: ${numero_mulheres} <br>
        Outros: ${numero_outros}
    `;
}