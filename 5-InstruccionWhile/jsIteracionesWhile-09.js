/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	let numero;
	let numeroMaximo;
	let numeroMinimo;
	let seguir;
	let flag = 0;

	do{
		numero = parseInt(prompt("Ingrese un numero"));

		if(flag == 0 || numero > numeroMaximo){
			numeroMaximo = numero;
		}
		if(flag == 0 || numero < numeroMinimo){
			numeroMinimo = numero;
			flag = 1;
		}
		
		seguir = prompt("Desea colocar otro numero?");
	}while(seguir == 's');

	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}//FIN DE LA FUNCIÓN