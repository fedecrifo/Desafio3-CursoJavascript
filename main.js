//Generando una lista de numeros aleatorios y imprimirlos de manera ordenada//

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
 
function ordenar() {
 
    let array = [];
 
    for (let i = 0; i < 10; i++) {
        array.push(getRandomInt(1, 100));
    }
 
    console.log("Array sin ordenar");
    console.log(array);
    array.sort(function (a, b) { return a - b });
    console.log("Array ordenado");
    console.log(array);
   
    let ul = document.createElement("ul");
     
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        let li = document.createElement("li"); 
        let textLi = document.createTextNode(element);
        li.appendChild(textLi);
        ul.appendChild(li);
 
    }
    
    let valores = document.getElementById("valores");
    valores.appendChild(ul);
 
}
 
window.onload = ordenar;