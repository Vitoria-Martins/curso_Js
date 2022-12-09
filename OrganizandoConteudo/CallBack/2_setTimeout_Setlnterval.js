// setTimeout

console.log("Antes do setTimeout");

setTimeout(function(){  
//conteudo setTimeout so aparcera depois dos 2 seg
    console.log("Testando o setTimeout");
    
}, 2000); //2000 equivale a 2 segundos

console.log("Depois do setTimeout");

// SetInterval

setInterval(function(){

    console.lo("Testando setInterval")
}, 1000) ;  //vai repetir o valor a cada 1seg so vai parar com uma instrucao de pare