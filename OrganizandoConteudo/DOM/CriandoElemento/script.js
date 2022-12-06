//criando a tag de paragrafo com DOM puro

var novoParagrafo = document.createElement("p");

//criando texto do paragrafo
var texto = document.createTextNode("Este é o conteúdo do paragrafo.");

// inserindo o texto dentro do paragrafo
novoParagrafo.appendChild(texto);
console.log(novoParagrafo);

// inserir em um container
var container = document.getElementById("container");

//Criando um span
var el = document.createElement("span");

// inserindo texto no span
el.appendChild(document.createTextNode("texto do span"));
console.log(el);

//inserindo elemento filho detro do elemento pai
//inserindo o span  no container
container.appendChild(el);
console.log(container);