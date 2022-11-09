//let e const sao 2 formas de criar variaveis

let x = 5;

//let pode ser mudado de valor a qualquer momento
x = 12;

//const é uma constante de valor fixo
const y = 10;

// valor nao pode ser mudado, se nao gera um Erro

//y = 15;

console.log(x);
console.log ('const ' + y);


//o mesmo nome de variavel de escopo local ou global pode ser usada, tanto em um quanto em outra se tiver valor diferente
if(true){
    let x = 20
console.log(x)

const y = 50;
console.log('const if ' + y);
}

console.log(x);

if(20 > 10){

 //repetir o nome da const ou let nao altera o valor das que ja foram declaradas
    const y = 100;

    console.log('const if 3 '+y);
}