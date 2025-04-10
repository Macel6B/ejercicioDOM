// document es el punto de inicio a partir del cual se pueden acceder
// a todos los elementos de la estructura HTML

let btnMostrar = document.getElementById("btnMostrar");
let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.getElementById("encabezado2");
let listas = document.getElementsByTagName("ul");
let txtReg = document.getElementById("txtReg");
let txtID = document.getElementById("txtID");

// console.log("otro elemento", otroElemento);


// console.log(listas.length);

// console.log(listas.item(1));

// console.log(elementos.length);

// console.log(elementos.item(2));


encabezado1.innerText = "Ejercicio DOM";
console.log(encabezado1.innerText);

encabezado2.innerText = "Dom Excercise";
console.log(encabezado1.innerText);

// Boton Especial

btnMostrar.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("botón btn Modificar presionado");

    let elementoUno = document.createElement("li");
    elementoUno.innerText = "Another item"; // Equivalente a <li>Another item</li>
    elementoUno.classList.add("list-group-item");

    let elementoDos = elementoUno.cloneNode(true);

    // listas.item(0).before(elementoUno);
    // listas.item(0).prepend(elementoDos);
    // listas.item(0).append(elementoUno);
    // listas.item(0).after(elementoDos);

    // listas.item(1).insertAdjacentElement("afterbegin", elementoDos)
    // listas.item(1).insertAdjacentElement("beforeend", elementoUno)

    listas.item(1).insertAdjacentHTML("beforebegin", `<li class="list-group-item">Another new item</li>`)
    listas.item(1).insertAdjacentHTML("afterend", `<li class="list-group-item">Another before begin \n item</li>`)
    listas.item(1).insertAdjacentHTML("afterbegin", `<li class="list-group-item">Another new item</li>`)
    listas.item(1).insertAdjacentHTML("beforeend", `<li class="list-group-item">Another before begin \n item</li>`)

}); //btnMostrar

//Load se ejecuta cuando termina de cargar todos los elementos de la página 
window.addEventListener("load", function (event){
    console.log("Se terminó de cargar la página");

}); //load

function txtToUpper(event){
    event.preventDefault();
    event.target.value = event.target.value.trim().toUpperCase();
}

// blur -> cuando se sale del campo
txtID.addEventListener("blur", txtToUpper); //txtID
txtKoorp.addEventListener("blur", txtToUpper); //txtKoorp

txtReg.addEventListener("blur", function (event){
    event.preventDefault();
    txtReg.value = txtReg.value.trim().slice(0,10);

});