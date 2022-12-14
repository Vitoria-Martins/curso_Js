// Onload So É executado depois do DOM 100% carregado
window.onload = function(){
    console.log("Carregar o DOM");


    //encapsula a var dentro do onload para aparecer assim que o dom carregar 
    var title2 = document.querySelector("#title");
 console.log(title2);
}
console.log("Carregou o JS ");

// pro evento ser carregado antes dos elementos da pgn, colocar a tag script acima de todos elementos como no CSS
var title = document.querySelector("#title");

console.log(title); 