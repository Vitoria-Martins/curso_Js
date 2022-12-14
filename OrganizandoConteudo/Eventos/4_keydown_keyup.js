// Keydown é ativao quando toca em uma tecla

document.addEventListener("keydown",
//event traz informacoes da tecla tocada
 function(event){
   //key mostra qual tecla foi clicada
    console.log(event.key);

    if(event.key === "Enter"){
        console.log("Apertou Enter");
    }
});

//keyup é ativado ao soltar a tecla

document.addEventListener("keyup", 
// (e) é o parametro para event mas pode chamar de qualquer coisa
function(e){
 
    if(Event.key === "Enter");
    console.log("Soltou o Enter") ;
});