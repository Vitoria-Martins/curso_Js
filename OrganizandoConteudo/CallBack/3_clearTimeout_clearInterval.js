//clearTimeout  na pratica
var x = 0;

//cria o serTimeout com 1,5 seg
var myTime = setTimeout(function(){
    console.log("O x é 0");
},1500);

//muda variavel de valor padrao, para 5
x = 5;

//cria uma condicao caso mude o valor padrao
if( x > 0){
    //clear pausa a acao setTimeout
    clearTimeout(myTime);
    console.log("O x passou de 0");
}

//ClearSetInterval na pratica
var myInterval = setInterval(function(){
    console.log("Imprimindo intervalo");

}, 500); //500 é meio segundo 0,5seg

setTimeout(function(){
    console.log("Nao precisamos mais repetir!");
    clearInterval(myInterval);
},1500);
