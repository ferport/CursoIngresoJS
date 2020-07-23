function mostrar()
{

	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch(mes){
		case "Febrero":
			alert(" Este mes no tiene más de 29 días.")
			break;
		default:
			alert("Este mes tiene 30 o más días")
	}
	
	
	
	/*switch(mes){
		case "Febrero":
			alert(" Este mes no tiene más de 29 días.")
			break;
		case "Enero":
		case "Marzo":
		case "Abril":
		case "Mayo":		
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert ("Este mes tiene 30 o más días")
			break;
	}	*/



}//FIN DE LA FUNCIÓN