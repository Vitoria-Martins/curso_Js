var lista = ['Laranja', 'Maçã', 'Pera','Jaca','Limão'];

//parvara criar elementos no dom

//create cria elemento
//getElement retorna o html

var listaUl = document.createElement('ul');

//para ler todo elementos que tiver na tag body
var body = document.getElementsByTagName('body');

//console.log(body);

//adiciona elemento filho
body[0].appendChild(listaUl);

var listaNoBody = document.getElementsByTagName('ul');

console.log(listaNoBody[0]);

for(var i = 0; i < lista.length; i++){

    var liFor = document.createElement('li');

    //creando um texto pra li
    var textoLi = document.createTextNode(lista[i]);

    //juntando liFor & textoLi
    liFor.appendChild(textoLi);

    //Para aparecer no site o HTML
    listaNoBody[0].appendChild(liFor);

}