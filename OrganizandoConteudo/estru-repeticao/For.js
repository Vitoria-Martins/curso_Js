// PADRAO: variavel - condiçao - atribuiçao

// NESTE CASO: 
//variavel ; condiçao ; incremento
for(var i =0; i < 10; i++){
     
    console.log("Repetindo for: " + i );
}

var arr = ["Vitoria", "Martins" , 19 , "Brasileira"];


// arr.length para retornar o comprimento do array. (se tiver 4 elementos, vai repetir 4 vezes)

for(var v = 0; v < arr.length; v++) {

    //arr[v] para exibir todo conteudo do array
    console.log(arr[v]);

}

//Ira repetir ate chegar no valor final da operaçao
for(var x = 5; x < 100; x *= 3){
    console.log(x);
}