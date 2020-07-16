/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let rectangulo;
    let alambradoTotal;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    rectangulo = (largo + ancho) * 2;
    alambradoTotal = rectangulo * 3;

    alert("El total de alambre a utilizar son " + alambradoTotal + " metros");
    
}
function Circulo () 
{
    let radio;
    let perimetro;
    let alambradoTotal;

    radio = parseFloat(document.getElementById("txtIdRadio").value);

    perimetro = 2 * radio * Math.PI;
    alambradoTotal = perimetro.toFixed(2) * 3;

    alert("El total de alambre a utilizar son " + alambradoTotal + " metros");
}
function Materiales () 
{
	let largo;
    let ancho;
    let area;
    let cemento;
    let cal;
    

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    area = largo * ancho;
    cemento = area * 2;
    cal = area * 3;
    
    alert(`Para un terreno de ${area} metros cuadrados se necesitan ${cemento} bolsas de cemento y ${cal} de cal`);
}