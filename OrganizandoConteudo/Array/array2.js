// splice adiciona elemnto no meio do array

var arr = [1,2,3,4,5];

//ex: quero adicionar no elemento 2,  quero remover 0 elementos, 999 numero que vai ser adicionado
arr.splice(2 , 0, 999);
console.log(arr);

// removendo elemento com splice
arr.splice( 4, 1);
console.log(arr);

//indexOf acha o indice do elemento
console.log(arr.indexOf(5));

// Join transforma um array em string

var arr2 = ["o", "rato", "roeu", "a", "roupa"];

console.log(arr2.join(" "));

// Reverse inverte os elemntos

console.log(arr2.reverse());