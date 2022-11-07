//Escopo é a acessibilidade de objetos, variáveis e funções em diferentes partes do código. Em outras palavras, o que determina quais são os dados que podem ser acessados em uma determinada parte do código é o escopo.


//variavel esta ano escopo GLOBAL
var x = 1;

var y = 3;

console.log(x,y);

function teste(){

//variavel esta no ecopo LOCAL
//(fora da funcao nao tem acesso a ela)
    var z = 0;

    console.log(z);
}

teste();

function testando(){

    var z = 5;

    console.log(z);
}


testando();

