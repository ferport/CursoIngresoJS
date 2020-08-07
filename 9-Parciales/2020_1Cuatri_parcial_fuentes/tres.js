function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let viudos = 0;
	let mayorTemperatura;
	let nombreMayorTemperatura;
	let cantidadViudos = 0;
	let cantidadSolteros = 0;
	let solterosViudos = 0; 
	let terceraEdadFiebre = 0;
	let promedio;
	let edadSolteros = 0;
	let flag = 0;

	do{
		nombre = prompt("Ingrese el nombre del pasajero");
		while(nombre == ""){
			nombre = prompt("Error! Ingrese el nombre del pasajero");
		}
		edad = parseInt(prompt("Ingrese la edad"));
		while(edad <= 0 || isNaN(edad)){
			edad = parseInt(prompt("Error! Ingrese una edad valida"));
		}
		sexo = prompt("Ingrese el sexo");
		while(sexo != 'f' && sexo != 'm'){
			sexo = prompt("Error! Ingrese un sexo valido");
		}
		estadoCivil = prompt("Ingrese estado civil (soltero, casado o viudo)");
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo"){
			estadoCivil = prompt("Error! Ingrese un estado civil valido (soltero, casado o viudo)");
		}
		temperatura = parseInt(prompt("Ingrese la temperatura"));
		while(temperatura <= 0 || isNaN(temperatura)){
			temperatura = parseInt(prompt("Error! Ingrese una temperatura valida"));
		}

		if(flag == 0){
			mayorTemperatura = temperatura;
			nombreMayorTemperatura = nombre;
			flag = 1;
		}else if(temperatura > mayorTemperatura){
			nombreMayorTemperatura = nombre;
		}

		switch(estadoCivil){
			case "viudo":
				if(edad >= 18){
					viudos ++;
				}
				if(sexo == 'm'){
					cantidadViudos ++;
				}
				break;
			case "soltero":
				if(sexo == 'm'){
					cantidadSolteros ++;
					edadSolteros = edadSolteros + edad;
				}
				break;
		}

		solterosViudos = cantidadSolteros + cantidadViudos;

		if(edad > 60 && temperatura >= 38){
			terceraEdadFiebre ++;
		}

		promedio = edadSolteros / cantidadSolteros;

		

		seguir = prompt("Quiere ingresar otro pasajero?(s/n)");
	}while(seguir == 's');

	alert(`La persona con mas temperatura es ${nombreMayorTemperatura}`);
	if(viudos != 0){
		alert(`Hay ${viudos} mayores de edad viudos`);
	}
	if(solterosViudos != 0){
		alert(`Hay ${solterosViudos} hombres entre solteros y viudos`);
	}
	if(terceraEdadFiebre != 0){
		alert(`Hay ${terceraEdadFiebre} personas de tercera edad con mas de 38°c`);
	}
	if(edadSolteros != 0){
		alert(`El promedio de edad entres los hombres solteros es de ${promedio}`);
	}

}
