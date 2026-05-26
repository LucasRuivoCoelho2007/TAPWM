// =====================================
// FUNÇÃO CONSTRUTORA - RETÂNGULO
// =====================================

function Retangulo(x, y){
    this.base = x;
    this.altura = y;

    this.calcularArea = function(){
        return this.base * this.altura;
    }
}

function calcularArea(){

    let base = Number(document.getElementById("base").value);
    let altura = Number(document.getElementById("altura").value);

    let ret = new Retangulo(base, altura);

    document.getElementById("resultadoArea").innerHTML =
        `Base: ${ret.base} <br>
         Altura: ${ret.altura} <br>
         Área: ${ret.calcularArea()}`;
}


// =====================================
// CLASSE CONTA
// =====================================

class Conta{

    constructor(nome, banco, numeroConta, saldo){
        this._nome = nome;
        this._banco = banco;
        this._numeroConta = numeroConta;
        this._saldo = saldo;
    }

    // GETS E SETS

    get nome(){
        return this._nome;
    }

    set nome(valor){
        this._nome = valor;
    }

    get banco(){
        return this._banco;
    }

    set banco(valor){
        this._banco = valor;
    }

    get numeroConta(){
        return this._numeroConta;
    }

    set numeroConta(valor){
        this._numeroConta = valor;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }
}


// =====================================
// CLASSE CORRENTE
// =====================================

class Corrente extends Conta{

    constructor(nome, banco, numeroConta, saldo, saldoEspecial){
        super(nome, banco, numeroConta, saldo);

        this._saldoEspecial = saldoEspecial;
    }

    get saldoEspecial(){
        return this._saldoEspecial;
    }

    set saldoEspecial(valor){
        this._saldoEspecial = valor;
    }
}


// =====================================
// CLASSE POUPANÇA
// =====================================

class Poupanca extends Conta{

    constructor(nome, banco, numeroConta, saldo, juros, dataVencimento){
        super(nome, banco, numeroConta, saldo);

        this._juros = juros;
        this._dataVencimento = dataVencimento;
    }

    get juros(){
        return this._juros;
    }

    set juros(valor){
        this._juros = valor;
    }

    get dataVencimento(){
        return this._dataVencimento;
    }

    set dataVencimento(valor){
        this._dataVencimento = valor;
    }
}


// =====================================
// MOSTRAR DADOS
// =====================================

function mostrarContas(){

    // OBJETO CORRENTE
    let contaCorrente = new Corrente(
        "João Silva",
        "Banco do Brasil",
        "12345-6",
        2500,
        1000
    );

    // OBJETO POUPANÇA
    let contaPoupanca = new Poupanca(
        "Maria Souza",
        "Caixa Econômica",
        "98765-0",
        5000,
        "5%",
        "10/12/2026"
    );

    document.getElementById("resultadoContas").innerHTML =

    `
    <strong>Conta Corrente</strong><br>
    Nome: ${contaCorrente.nome} <br>
    Banco: ${contaCorrente.banco} <br>
    Número da Conta: ${contaCorrente.numeroConta} <br>
    Saldo: R$ ${contaCorrente.saldo} <br>
    Saldo Especial: R$ ${contaCorrente.saldoEspecial}

    <hr>

    <strong>Conta Poupança</strong><br>
    Nome: ${contaPoupanca.nome} <br>
    Banco: ${contaPoupanca.banco} <br>
    Número da Conta: ${contaPoupanca.numeroConta} <br>
    Saldo: R$ ${contaPoupanca.saldo} <br>
    Juros: ${contaPoupanca.juros} <br>
    Data de Vencimento: ${contaPoupanca.dataVencimento}
    `;
}