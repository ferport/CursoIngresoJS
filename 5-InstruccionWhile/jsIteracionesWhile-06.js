function mostrar()
{
	let numero;
	let suma = 0;
	let promedio;
	let i = 0;

	while(i < 5){
		numero = parseInt(prompt("Ingrese un numero"))
		suma = suma + numero;
		i++
	}
	promedio = suma / 5;

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;
 
}//FIN DE LA FUNCIÓN