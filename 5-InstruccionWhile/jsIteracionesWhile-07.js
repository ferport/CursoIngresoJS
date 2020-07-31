/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let seguir;
	let numero;
	let suma = 0;
	let promedio;
	let contador = 0;

	do{
		numero = parseInt(prompt("Ingrese un numero"));
		suma = suma + numero;
		contador ++;
		seguir = prompt("Desea ingresar otro numero?");
	}while(seguir == 's');

	promedio = suma / contador;

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN