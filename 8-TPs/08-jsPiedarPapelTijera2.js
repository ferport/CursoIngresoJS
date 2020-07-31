let eleccionMaquina;
let ContadorDeEmpates=0;
let ContadorDeGanadas=0;
let ContadorDePerdidas=0;

function comenzar()
{
    eleccionMaquina = Math.round(Math.random()* 2 + 1);

}//FIN DE LA FUNCIÓN
function piedra()
{
	if(eleccionMaquina == 1){
		alert("Empate");
		ContadorDeEmpates ++;
    }else if(eleccionMaquina == 2){
		alert("Perdiste");
		ContadorDePerdidas ++;
    }else{
		alert("Ganaste");
		ContadorDeGanadas ++;
	}
	mostrarResultado()
	comenzar()
}//FIN DE LA FUNCIÓN
function papel()
{
	if(eleccionMaquina == 1){
		alert("Ganaste");
		ContadorDeGanadas ++;
    }else if(eleccionMaquina == 2){
		alert("Empate");
		ContadorDeEmpates ++;
    }else{
		alert("Perdiste");
		ContadorDePerdidas ++;
	}
	mostrarResultado()
	comenzar()
}//FIN DE LA FUNCIÓN
function tijera()
{
    if(eleccionMaquina == 1){
		alert("Perdiste");
		ContadorDePerdidas ++;
    }else if(eleccionMaquina == 2){
		alert("Ganaste");
		ContadorDeGanadas ++;
    }else{
		alert("Empate");
		ContadorDeEmpates ++;
	}
	mostrarResultado()
	comenzar()
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
	document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
	document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;	
}