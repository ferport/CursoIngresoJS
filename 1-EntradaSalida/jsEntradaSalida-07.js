/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

function sumar()
{	
	let numero1;
	let numero2;
	let suma;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	//numero1 = parseInt(numero1);

	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	//numero2 = parseInt(numero2);

	suma = numero1 + numero2;

	alert("La suma es " + suma);	
}


function restar()
{
	let numero1;
	let numero2;
	let resta;

	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	
	resta = numero1 - numero2;

	alert("La resta es " + resta)
}

function multiplicar()
{
	let numero1;
	let numero2;
	let multiplicacion;

	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	
	multiplicacion = numero1 * numero2;

	alert("La resta es " + multiplicacion)
}

function dividir()
{
	let numero1;
	let numero2;
	let division;

	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	
	division = numero1 / numero2;

	alert("La division es " + division)
}

