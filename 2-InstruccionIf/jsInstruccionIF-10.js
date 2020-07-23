function mostrar()
{
	let nota;

	nota = Math.round(Math.random() * (10 - 1) + 1);

	if(nota >=9){
		alert(`EXCELENTE! Su nota es ${nota}`)
	}else if (nota >= 4){
		alert(`APROBO! Su nota es ${nota}`)
	}else{
		alert(`Vamos, la proxima se puede! Su nota es ${nota}`)
	}

}//FIN DE LA FUNCIÓN