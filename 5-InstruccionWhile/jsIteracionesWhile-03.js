/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;

	clave = prompt("Ingrese una clave");

	while(clave != "utn750"){
		
		clave = prompt("Clave incorrecta,vuelva a intentarlo");
		

	};

	alert("Clave correcta");
	
}//FIN DE LA FUNCIÓN
