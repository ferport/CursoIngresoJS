/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;

	sexo = prompt("Ingrese 'f' si su sexo es femenino y 'm' si es masculino");

	while(sexo != 'f' && sexo != 'm'){
		sexo = prompt("Ingrese un sexo valido, 'f' para femenino o 'm' para masculino");
	}

	document.getElementById("txtIdSexo").value = sexo;

}//FIN DE LA FUNCIÓN