//BREAK;

for(var i = 10; i > 0; i--){
    console.log(i);

 //se a i for igual a 5, quando chegar no 5 vai parar
    if( i === 5 ){
        break;
    }
}
console.log("Deu o break;")


//CONTINUE;

var x = 0;

while( x < 100){

    // que sera contado de 10 em 10  
    x += 10;

    //se x for igual a 60 vai pular 60 e ir pro proximo
    if(x === 60 || x ===90){
        console.log("CONTINUE")
        continue;
    }

    console.log("Testando continue" + x);
}
