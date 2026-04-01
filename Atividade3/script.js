function Media(){
    let nome = prompt("Digite seu nome: ");
    let nota1 = prompt("Digite a primeira nota: ");
    let nota2 = prompt("Digite a segunda nota: ");

    let media = (parseFloat(nota1) + parseFloat(nota2)) / 2;

    alert("A média das notas de " + nome + " é: " + parseFloat(media));
}

function Operacoes(){
    let n1 = parseFloat(prompt("Digite o primeiro número: "));
    let n2 = parseFloat(prompt("Digite o segundo número: "));

    alert("n1 = " + n1 + "\nn2 = " + n2 +
        "\nSoma: " + (n1 + n2) +
        "\nSubtração do primeiro pelo segundo: " + (n1 - n2) +
        "\nProduto dos dois: " + (n1 * n2) +
        "\nDivisão do primeiro pelo segundo: " + (n1 / n2) + 
        "\nResto da divisão do primeiro pelo segundo: " + (n1 % n2)
    );
    
}