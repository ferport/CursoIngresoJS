/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
	let edad;

	//Conseguir los valores desde las cajas de texto
	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;

	//alert("Usted se llama " + nombre + " y tiene " + edad + " años");

	//template stick
	alert(`Usted se llama ${nombre} y tiene ${edad} años`);
}

