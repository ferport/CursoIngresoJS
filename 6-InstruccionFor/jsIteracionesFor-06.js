function mostrar()
{
	let numero;
	let contadorPares = 0;

	numero = parseInt(prompt("Ingrese un numero"));

	for(let i = 1; i <= numero; i++){
		if(i % 2 == 0){
			console.log(i);
			contadorPares ++;
		}
	}

	console.log(contadorPares);


}//FIN DE LA FUNCIÓN