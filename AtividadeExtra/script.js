//========== DADOS BASE ==========
const nome = "João";
const idade = 20;
const hobby = "tocar violão";

//========== ELEMENTOS ==========
const pLiteral = document.getElementById("literal");
const pObject = document.getElementById("object");
const pFuncaoConstrutora = document.getElementById("funcaoConstrutora");
const pClasse = document.getElementById("classe");
const pCreate = document.getElementById("create");

//========== LITERAL ==========
const pessoaLiteral = {
  nome,
  idade,
  hobby,
  apresentar() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}.`;
  }
};

pLiteral.innerText = pessoaLiteral.apresentar();

//========== OBJECT ==========
const pessoaObject = new Object();
pessoaObject.nome = nome;
pessoaObject.idade = idade;
pessoaObject.hobby = hobby;
pessoaObject.apresentar = function () {
  return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}.`;
};

pObject.innerText = pessoaObject.apresentar();

//========== FUNÇÃO CONSTRUTORA ==========
function Pessoa(nome, idade, hobby) {
  this.nome = nome;
  this.idade = idade;
  this.hobby = hobby;

  this.apresentar = function () {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}.`;
  };
}

const pessoaFuncao = new Pessoa(nome, idade, hobby);
pFuncaoConstrutora.innerText = pessoaFuncao.apresentar();

//========== CLASSE ==========
class PessoaClasse {
  constructor(nome, idade, hobby) {
    this.nome = nome;
    this.idade = idade;
    this.hobby = hobby;
  }

  apresentar() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}.`;
  }
}

const pessoaClasse = new PessoaClasse(nome, idade, hobby);
pClasse.innerText = pessoaClasse.apresentar();

//========== OBJECT.CREATE ==========
const prototipoPessoa = {
  apresentar() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}.`;
  }
};

const pessoaCreate = Object.create(prototipoPessoa);
pessoaCreate.nome = nome;
pessoaCreate.idade = idade;
pessoaCreate.hobby = hobby;

pCreate.innerText = pessoaCreate.apresentar();