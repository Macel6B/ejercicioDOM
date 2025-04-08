// document es el punto de inicio a partir del cual se pueden acceder
// a todos los elementos de la estructura HTML

let btnMostrar = document.getElementById("btnMostrar");
let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.getElementById("encabezado2");
let listas = document.getElementsByTagName("ul");
let elementos = document.getElementsByClassName("list-group-item");
let otroElemento = document.querySelector("ul>li");

console.log("otro elemento", otroElemento);


console.log(listas.length);

console.log(listas.item(1));

console.log(elementos.length);

console.log(elementos.item(2));


encabezado1.innerText = "Ejercicio DOM";
console.log(encabezado1.innerText);

encabezado2.innerText = "Dom Excercise";
console.log(encabezado1.innerText);

// Boton Especial

btnMostrar.addEventListener("click", function (event){
    event.preventDefault(); 
    console.log("botón btn Modificar presionado");
     
    let elementoUno = document.createElement("li");
    elementoUno.innerText="Another item"; // Equivalente a <li>Another item</li>
    elementoUno.classList.add("list-group-item"); 

    let elementoDos = elementoUno.cloneNode(true);

    // listas.item(0).before(elementoUno);
    // listas.item(0).prepend(elementoDos);
    listas.item(0).append(elementoUno);
    listas.item(0).after(elementoDos);


});



