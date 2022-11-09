//perseFloat transforma um valor em numero ponto flutuante

console.log(parseFloat('12.999'));
// caso o primeiro de erro
console.log(Number.parseFloat('12.999'));

//parseInt transforma um valor em numero inteiro

console.log(parseInt('10'));
console.log(parseInt(16.190));

//toFixed arrendonda as casas decimais

console.log(23.525252525.toFixed(1));

//isNaN determina se o valor é NaN ou não

console.log(isNaN("teste"));
console.log(isNaN(12));
console.log(isNaN("14"));

//MAX_VALUE o js determina infinity
console.log(Number.MAX_VALUE);
console.log(2.7976931348623157e+308);

//MIN_VALUE o js determina menos infinity
console.log(Number.MIN_VALUE);

