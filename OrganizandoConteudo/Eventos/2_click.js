//criando var do elemento que vai ser clicado 
var btn = document.querySelector("#btn");
console.log(btn);


//(1-"tipo do evento". 2-CB que vai realizar açao)
btn.addEventListener("click", function(){
    console.log("Clicou!");

//this refere o proprio elemento em que ele esta
    console.log(this);

// isso faz o botao ficar red quando clica
    this.style.color = "red";
});

//click afetando outros elementos
var title = document.querySelector("#title");

// a acao vai ser selecionar o subtitle que esta dentro de title
title.addEventListener("click", function(){
    var subtitle = document.querySelector(".subtitle");

    subtitle.style.display = "none";
});

// double click
var subtitle = document.querySelector(".subtitle");

// dblClick faz acao ao clicar 2 vezes
subtitle.addEventListener("dblclick", function(){
      console.log("click duplo!");
});