/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numero;
	let sumaNegativos = 0;
	let sumaPositivos = 0;
	let contadorPositivos = 0;
	let contadorNegativos = 0;
	let ceros = 0;
	let contadorPares = 0;
	let promedioNegativos = 0;
	let promedioPositivos = 0;
	let diferencia;
	let seguir;

	do{
		numero = parseInt(prompt("Ingrese un numero"));

		if(numero % 2 == 0){
			contadorPares ++;
		}

		if(numero < 0){
			sumaNegativos = sumaNegativos + numero;
			contadorNegativos ++;
		}else if(numero > 0){
			sumaPositivos = sumaPositivos + numero;
			contadorPositivos ++;
		}else{
			ceros ++;
		}

		if(contadorNegativos != 0){
			promedioNegativos = sumaNegativos / contadorNegativos;
		}
		
		if(contadorPositivos != 0){
			promedioPositivos = sumaPositivos / contadorPositivos;
		}
		

		diferencia = contadorPositivos - contadorNegativos;

		seguir = prompt("Quieres ingresar otro numero?");
	}while(seguir == 's');

	document.write("<p>1-Suma de los negativos = " + sumaNegativos + "</p></hr>");
	document.write("<p>2-Suma de los positivos = " + sumaPositivos + "</p></hr>");
	document.write("<p>3-Cantidad de negativos = " + contadorNegativos + "</p></hr>");
	document.write("<p>4-Cantidad de positivos = " + contadorPositivos + "</p></hr>");
	document.write("<p>5-Cantidad de ceros = " + ceros + "</p></hr>");
	document.write("<p>6-Cantidad de numeros pares = " + contadorPares + "</p></hr>");
	document.write("<p>7-Promedio de positivos = " + promedioPositivos + "</p></hr>");
	document.write("<p>8-Promedio de negativos = " + promedioNegativos + "</p></hr>");
	document.write("<p>9-Diferencia entre negativos y positivos = " + diferencia + "</p></hr>");
}//FIN DE LA FUNCIÓN