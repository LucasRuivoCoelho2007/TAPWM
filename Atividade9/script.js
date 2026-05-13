function calcularIMC() {

    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);

    // validação
    if (altura <= 0 || peso <= 0 || isNaN(altura) || isNaN(peso)) {
        document.getElementById("resultado").innerHTML =
            "Digite valores válidos!";
        return;
    }

    // cálculo do IMC
    let imc = peso / (altura * altura);

    let classificacao = "";

    // classificação
    if (imc < 18.5) {
        classificacao = "Magreza";
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Normal";
    }
    else if (imc >= 25 && imc <= 29.9) {
        classificacao = "Sobrepeso";
    }
    else if (imc >= 30 && imc <= 39.9) {
        classificacao = "Obesidade";
    }
    else {
        classificacao = "Obesidade Grave";
    }

    // mostrar resultado
    document.getElementById("resultado").innerHTML =
        `
        <h2>Resultado</h2>
        <p>IMC: ${imc.toFixed(2)}</p>
        <p>Classificação: ${classificacao}</p>
        `;
}