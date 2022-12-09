//propriedades document
console.log(document.body);

//acessando todos os links d pagina 
//[0] para selecionar o link q vc quer
console.log(document.links[0]);

//alterando o elemento
document.links[0].textContent =  "Twitter";

//acessar URL da pagina 
console.log(document.URL);

//acessar titulo da pagina
console.log(document.title);

//alterando title
document.title = "Aula  42";
