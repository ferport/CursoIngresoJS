function mostrar()
{
	let estacion;
	let destino;
	let estadia;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	estadia = 15000;

	switch(estacion){
		case "Invierno":
			switch(destino){
				case "Bariloche":
					estadia = estadia + (estadia*0.2);
					alert(`En ${estacion} el precio final para ${destino} es de $${estadia}`);
					break;
				case "Cataratas":
				case "Cordoba":
					estadia = estadia - (estadia*0.1);
					alert(`En ${estacion} el precio final para ${destino} es de $${estadia}`);
					break;
				case "Mar del plata":
					estadia = estadia - (estadia*0.2);
					alert(`En ${estacion} el precio final para ${destino} es de $${estadia}`);
					break;
			}
			break;
		case "Verano":
			switch(destino){
				case "Bariloche":
					estadia = estadia - (estadia*0.2);
					alert(`En ${estacion} el precio final para ${destino} es de $${estadia}`);
					break;
				case "Cataratas":
				case "Cordoba":
					estadia = estadia + (estadia*0.1);
					alert(`En ${estacion} el precio final para ${destino} es de $${estadia}`);
					break;
				case "Mar del plata":
					estadia = estadia + (estadia*0.2);
					alert(`En ${estacion} el precio final para ${destino} es de $${estadia}`);
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch(destino){
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					estadia = estadia + (estadia*0.1);
					alert(`En ${estacion} el precio final para ${destino} es de $${estadia}`);
					break;
				case "Cordoba":
					estadia = estadia;
					alert(`En ${estacion} el precio final para ${destino} es de $${estadia}`);
					break;
			}
			break;
					
	}

}//FIN DE LA FUNCIÓN