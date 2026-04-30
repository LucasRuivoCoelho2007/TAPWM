// ===== FUNÇÃO 1 =====
function calcular(a, b, c) {
    const soma = a + b + c;
    const quad1 = a * a;
    const quad2 = b * b;

    return `A soma dos três números é: ${soma}, o quadrado do primeiro é: ${quad1} e o quadrado do segundo é: ${quad2}`;
}

function func1() {
    const n1 = Number(document.getElementById("f1_1").value);
    const n2 = Number(document.getElementById("f1_2").value);
    const n3 = Number(document.getElementById("f1_3").value);

    const arr = [n1, n2, n3];

    // usando APPLY
    const resultado = calcular.apply(null, arr);

    document.getElementById("resp1").innerText = resultado;
}

// ===== FUNÇÃO 2 =====
function gerarPalavras(letras) {
    let palavras = [];

    function embaralhar(arr) {
        let copia = arr.slice();
        for (let i = copia.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [copia[i], copia[j]] = [copia[j], copia[i]];
        }
        return copia.join("");
    }

    while (palavras.length < 10) {
        let nova = embaralhar(letras);

        if (!palavras.includes(nova)) {
            palavras.push(nova);
        }
    }

    return palavras;
}

function func2() {
    const l1 = document.getElementById("f2_1").value.toUpperCase();
    const l2 = document.getElementById("f2_2").value.toUpperCase();
    const l3 = document.getElementById("f2_3").value.toUpperCase();
    const l4 = document.getElementById("f2_4").value.toUpperCase();
    const l5 = document.getElementById("f2_5").value.toUpperCase();

    const letras = [l1, l2, l3, l4, l5];

    // usando APPLY
    const resultado = gerarPalavras.apply(null, [letras]);

    document.getElementById("resp2").innerText = resultado.join(", ");
}