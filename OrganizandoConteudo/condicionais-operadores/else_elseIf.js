var nome = "Julia";

if(nome == "Veronica"){ //se for true da esse resultado:
    console.log("O nome dela é Veronica");

    //se nao,  da esse resultado:
} else if(nome =="Vitoria"){
    console.log("O nome dela é vitoria");

    //é possivel conter varios else if
} else if(nome == "Julia"){
    console.log("Ela se chama Julia")
    
}
else{ //se nao der true em nenhum dos acima, é false e da esse resultado:
    console.log("Ela possui outro nome!");
}

//é possivel usar apenas if & else if

var idade = 15;

if(idade >= 18){
    console.log("Ela pode entrar na festa");
} else if (idade <= 17){
    console.log("Ela só pode entar com autorização!");
}