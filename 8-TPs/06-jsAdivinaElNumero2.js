/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let numeroSecreto; 
let contadorIntentos;
let flag = 0;//variable bandera

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	  numeroSecreto = Math.round(Math.random()* 99 + 1);
    alert("Listo,ya pense un numero .. trata de adivinarlo!!!");
    flag = 1;
    contadorIntentos = 0;
	document.getElementById("txtIdIntentos").value = contadorIntentos;
	document.getElementById("txtIdNumero").focus();
	//alert(numeroSecreto);
	

}

function verificar(){

  let numero;

  if(flag == 0){
	alert("Debes presionar primero el boton Comenzar");
  }else{

    numero = parseInt(document.getElementById("txtIdNumero").value);
    contadorIntentos ++;
    document.getElementById("txtIdIntentos").value = contadorIntentos;

    if(numero == numeroSecreto){
	  	//aca va el codigo usuario ganador
 		switch(contadorIntentos){
		case 1:
			alert("Usted es un Psíquico");
			break;
		case 2:
			alert("Excelente percepción");
			break;
		case 3:
			alert("Esto es suerte");
			break;
		case 4:
			alert("Excelente técnica");
			break;
		case 5:
			alert("Usted está en la media");
			break;
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
			alert("Falta técnica");
			break;
		default:
			alert("afortunado en el amor!!");
	}
      	flag = 0;
      
    }else if(numero > numeroSecreto){
      	// aca va el codigo donde informo que el usuario se paso
      	alert("Se paso");
    }else{
      	// aca va el codigo donde informo que el usuario se paso
      	alert("Le falta");
    }
    
    document.getElementById("txtIdNumero").value = "";
  }
}