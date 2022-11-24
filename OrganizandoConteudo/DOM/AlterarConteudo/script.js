// selecionar elemento
var title = document.querySelector("#title");
console.log(title);

// 1 forma de alterar elemento (INNERHTML)
title.innerHTML = "Testando o texto alterado!";

//verificando se foi selecionado elemento certo
var subtitle = document.querySelector(".subtitle");
console.log(subtitle);

//segunda forma (TEXTCONTENT)
subtitle.textContent = "Testando o textContent!";