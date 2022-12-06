//criando um elemento 
var el = document.createElement("h3");

//cria classe ao elemento
el.classList = "Testando-classe";

//cria texto para a tag criada
var texto = document.createTextNode("Este é o texto do h3");

//adicioona o texto na tag criada
el.appendChild(texto);

console.log(el);

//selecionando elemento que vai ser trocado
var title = document.querySelector("#title");
console.log(title);

//selecionando pai do elemento
var pai = title.parentNode;

//troca dos elementos
//(1- elemt novo , 2- elemt a ser substituido)
pai.replaceChild(el, title);