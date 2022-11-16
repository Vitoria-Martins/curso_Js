// length comprimento ou quantidade de caractere que a string possui

var nome = "Veronica";
console.log(nome.length);

//indexOf indice de tal caractere ou string

console.log(nome[2]);

var frase = "O rato roeu a roupa do rei de Roma";
console.log(frase.indexOf("roeu"));

//slice remove uma parte da frase

var roeu = frase.slice(7, 11);
console.log(roeu);

//replace troca uma frase por outra

var novaFrase = frase.replace("roeu", "teste");
console.log(novaFrase);



