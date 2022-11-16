// length largura do array ou quantidade de caractere
var arr = [1,2,3,4,5]
console.log(arr.length);

// push adiciona elemento no fim do array
arr.push(6);
arr.push("Pode adicionar qualquer coisa");
console.log(arr);

//pop remove ultimo elemento do array
arr.pop();
console.log(arr);

// unshift adiciona elemento no inicio do array
arr.unshift(0);
arr.unshift("teste");
console.log(arr);

// shift remove elemento do inicio
arr.shift();
console.log(arr);

//   acessa ultimo elemento do array
console.log(arr[arr.length -1]);

// isArray verifica se o objeto é um array
console.log(Array.isArray(5));

console.log(Array.isArray(arr));


