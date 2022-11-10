// toLoweCase deixa em letras minusculas

var frase = "Esta é a frase que vamos manipular";
console.log(frase.toLowerCase()); 

//deixa em letras maiusculas

console.log(frase.toUpperCase());

// trim remove espaços

var nome = "      Vitoria        "
var nomeTrim = nome.trim();
//sem o trim
console.log(nome);
console.log(nomeTrim);

// Split tranfroma texto em um array

//split(aqui voce coloca o parametro, no exmplo(" ") para separar as palavras por espaço)
console.log(frase.split(" "));

var tags = "PHP, JavaScript, HTML, CSS";
// sem split
console.log(tags);
console.log(tags.split(", "));

//lastIndexOf para encontar a ultima palavra
var fraseDois = "Eu quero a ultima palavra teste dessa frase teste"

// IndexOf encontra a primeira palavra 
console.log(fraseDois.indexOf("teste"));
console.log(fraseDois.lastIndexOf("teste"));