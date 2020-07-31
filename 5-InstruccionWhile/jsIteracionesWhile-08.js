/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let seguir;
	let sumar = 0;
	let multiplicar = 1;
	let flag = 0;

	do{
		numero = parseInt(prompt("Ingrese un numero"));;
		if(numero >= 0){
			sumar = sumar + numero;
		}else{
			flag = 1;
			multiplicar = multiplicar * numero;
		}
		seguir = prompt("Desea colocar mas numero?");
	}while(seguir == 's');

	if(flag == 0){
		multiplicar = 0;
	}

	document.getElementById("txtIdSuma").value = sumar;
	document.getElementById("txtIdProducto").value = multiplicar;

}//FIN DE LA FUNCIÓN