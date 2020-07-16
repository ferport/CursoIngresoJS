/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let numero1;
    let numero2;
    let numero3;
    let suma;

    numero1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    numero2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    numero3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma = numero1 + numero2 + numero3;

    alert("La suma de los precios es: $" + suma.toFixed(2));
}
function Promedio () 
{
    let numero1;
    let numero2;
    let numero3;
    let promedio;

    numero1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    numero2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    numero3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    promedio = (numero1 + numero2 + numero3)/3;

    alert("El promedio de los precios es: $" + promedio.toFixed(2));
}
function PrecioFinal () 
{
    let numero1;
    let numero2;
    let numero3;
    let suma;
    let iva;
    let precioFinal;

    numero1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    numero2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    numero3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma = numero1 + numero2 + numero3;
    iva = suma * 0.21;
    precioFinal = suma + iva;

    alert("El precio final es: $" + precioFinal.toFixed(2));
}