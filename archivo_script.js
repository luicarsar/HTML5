


function ejecuta(){



    /*document.getElementsByTagName("p") [i].onclick=saludo;}*/
    /*document.getElementById("importante").onclick=saludo;*/
 /* var z=document.getElementsByClassName("importante")[i].onclick=saludo;}*/

/*document.querySelector(".importante").onclick=saludo;*/
/*document.querySelector("#principal p:last-child").onclick=saludo;*/
/*var elementos=document.querySelectorAll("p");                      Selecionamos todos los párrafos*/
var elementos=document.querySelectorAll("#principal p,span");         /*Seleccionamos sólo los div y la palabra del SPAN*/

for(var i=0;i<elementos.length;i++){

elementos[i].onclick=saludo;}


}


function saludo(){

alert ("Hola de nuevo");
}

window.onload=ejecuta;
