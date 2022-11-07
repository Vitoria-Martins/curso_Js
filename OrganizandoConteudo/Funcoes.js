// palavra reservada - nome da funcao   

function primeiraFuncao(){

    console.log("Hello Word das funções");
}

primeiraFuncao();

//(adicionando argumento)
function dizerNome(nome){

    console.log("O nome é " + nome);
}
//dando valor ao argumento
//se nao colocar nada, sera undefined
dizerNome("Vitoria");

//pode reutilizar o argumento varias vezes
dizerNome("veronica");
dizerNome("julia");

//fazendo soma

function soma(a,b){
    var soma = a + b;
    //retun serve para retonar o valor da soma
    return soma;
}

var somaUm = soma(2 , 5);

console.log(somaUm);

//reutilizando a mesma funcao
var somaDois = soma(5, 5);

console.log(somaDois);