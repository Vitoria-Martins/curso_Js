//mouseover faz acao ao passar o mouse em cima do elemento
var title = document.querySelector("#title");

title.addEventListener("mouseover", function(){

    this.style.backgroundColor = "yellow";
})

//mouseout faz acao quando o mouse sai de cima do elemento
title.addEventListener("mouseout", function(){

    this.style.backgroundColor = "blue";
});

//afetar outros elementos com mouseover
var subtitle = document.querySelector(".subtitle");

//add evento mouseover no elemento selecionado
subtitle.addEventListener("mouseover", function(){

//seleciona elemento escondido com display no css
var legenda = document.querySelector("#legenda");

//remove a class do elemento (para que acao css da class nao funcione)
    legenda.classList.remove("hide");
});