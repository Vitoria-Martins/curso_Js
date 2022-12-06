//criar elemento

var el = document.createElement("div");

// adicionando class ao elemneto

el.classList = "div-criada";
console.log(el);

//inserindo elemento do DOM ao HTML da pgn

var container =  document.querySelector("#container");
container.appendChild(el);


// inserBefore - insere antes

var el2 = document.createElement("div");

el2.classList = "div-before";

var el3 = document.querySelector("#container .div-criada");

console.log(el3);

// sao 2 parametos (1- elemento a ser inserido 2-referencia) elemento pai como referencia principal(container)

// a div selecionada fica antes da referencia
container.insertBefore(el2, el3);
