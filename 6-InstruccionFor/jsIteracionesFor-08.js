function mostrar() {

	let numero;
	let contadorDivisores = 0;

	numero = parseInt(prompt("ingrese un numero"));

	for (let i = 1; i <= numero; i++) {
		if (numero % i == 0) {
			contadorDivisores++;
		}
	}
	if (contadorDivisores == 2){
		console.log("Es primo");
	}else{
		console.log("No es primo");
	}
	
	
}//FIN DE LA FUNCIÓN