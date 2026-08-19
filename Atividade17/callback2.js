function exibeMensagensNaOrdem(mensagem, callback) {
    console.log(mensagem);
    callback();
}

//executando
exibeMensagensNaOrdem('Essa é primeira mensagem', function(){
    console.log('Essa é a segunda mensagem')
});