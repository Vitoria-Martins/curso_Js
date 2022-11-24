//fora do escopo local o THIS sempre se refere ao objeto GLOBAL Window
console.log(this);

alert('Ola');

// THIS serve para exib 
let pessoa = {
    nome:  "Vitoria",
    idade: 19,
    falar: function(){
        console.log("Olá, tudo bem?");
    } ,

// Em objetos o THIS se refere a instancia e pode acessar suas propriedades

dizerNome: function(){
    // 1: Exibindo valor do objeto
 console.log("O meu nome é " + this.nome);
},

// 2: Mudando valor do objeto
aniversario: function(){
     this.idade += 1;
}, saudacao: function() {
  return ' Sra.' + this.nome;
}
}; 

pessoa.dizerNome();

console.log(pessoa.idade);

//e toda vez que chamar function aniversario a idade ficara 1 ano mais velha
pessoa.aniversario();

console.log(pessoa.idade);

var sdc = pessoa.saudacao();

console.log("Olá" + sdc);
