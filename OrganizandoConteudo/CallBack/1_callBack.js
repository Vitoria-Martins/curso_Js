//cria uma function para oque vai exibir
function exibir(num){
    console.log("A operação resultou em: " + num);
}

//alem do parametro a,b add callback ou cb
function soma(a, b, callback){
    var op = a + b;
    callback(op);
}
//cb abreviacao de callback
function multiplicacao(a, b, cb){
        var op = a * b;
        cb(op);
    }
//adicionar  a fuction exibir, para que alem da soma apareça o conteudo da function exibir
    soma(2,2, exibir);

    multiplicacao(2, 4, exibir);
