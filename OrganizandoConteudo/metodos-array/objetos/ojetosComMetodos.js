//TUDO É OJETO

//Criando objeto

let pessoa = {
    nome:  "Vitoria",
    Idade: 19,
    falar: function(){
        console.log("Olá, tudo bem?")
    } ,
    soma: function(a,b){
        return a + b ;
    }
};
//Acessando propriedad do objeto
console.log(pessoa.nome);

// é possivel colocar functions dentro de objetos
pessoa.falar();
var soma = pessoa.soma(2,2);

//acessando a function soma
console.log(soma);