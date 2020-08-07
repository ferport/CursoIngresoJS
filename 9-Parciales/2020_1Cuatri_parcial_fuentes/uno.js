
function mostrar()
{
    let tipo;
    let precio;
    let cantidad;
    let marca;
    let fabricante;
    let precioAlcoholBarato;
    let cantidadAlcoholBarato;
    let fabricanteAlcoholBarato;
    let tipoMayor;
    let promedioCompras;
    let cantidadJabones = 0;
    let cantidadBarbijos = 0;
    let cantidadAlcoholes = 0;
    let acumBarbijo = 0;
    let acumJabon = 0;
    let acumAlcohol = 0;
    let i;
    let flagAlcohol = 0;

    for(i = 0; i < 5; i++){
        tipo = prompt("Ingrese el tipo de producto (jabon,barbijo o alcohol)");
        while(tipo != "jabon" && tipo != "barbijo" && tipo != "alcohol"){
            tipo = prompt("Error! Ingrese un tipo de producto valido (jabon,barbijo o alcohol)");
        }
        precio = parseFloat(prompt("Ingrese el precio del producto entre 100 y 300"));
        while(precio < 100 || precio > 300 || isNaN(precio)){
            precio = parseFloat(prompt("Error! Ingrese un precio valido entre 100 y 300"));
        }
        cantidad = parseInt(prompt("Ingrese la cantidad entre 1 y 1000"));
        while(cantidad <= 0 || cantidad > 1000 || isNaN(cantidad)){
            cantidad = parseInt(prompt("Error! Ingrese una cantidad valida entre 1 y 1000"));
        }
        marca = prompt("Ingrese la marca");
        while(marca == ""){
            marca = prompt("Error! Ingrese la marca");
        }
        fabricante = prompt("Ingrese el fabricante");
        while(fabricante == ""){
            fabricante = prompt("Error! Ingrese el fabricante");
        }

        switch(tipo){
            case "alcohol":
                cantidadAlcoholes += cantidad;
                acumAlcohol ++;
                if(flagAlcohol == 0 || precio < precioAlcoholBarato){
                    flagAlcohol = 1;
                    precioAlcoholBarato = precio;
                    cantidadAlcoholBarato = cantidad;
                    fabricanteAlcoholBarato = fabricante;
                }
                break;
            case "barbijo":
                cantidadBarbijos = cantidadBarbijos + cantidad;
                acumBarbijo ++;
                break;
            case "jabon":
                cantidadJabones = cantidadJabones + cantidad;
                acumJabon ++;
                break;
        }

        //console.log(tipo, precio, cantidad, marca, fabricante);
        //console.log(cantidadAlcoholBarato, fabricanteAlcoholBarato);
        //console.log(cantidadMayor);
        //console.log(cantidadJabones);
    }

    if(cantidadAlcoholes > cantidadBarbijos && cantidadAlcoholes > cantidadJabones){
        tipoMayor = "Alcohol";
        promedioCompras = cantidadAlcoholes / acumAlcohol;
    }else if(cantidadBarbijos >= cantidadAlcoholes && cantidadBarbijos > cantidadJabones){
        tipoMayor = "Barbijo";
        promedioCompras = cantidadBarbijos / acumBarbijo;
    }else{
        tipoMayor = "Jabon";
        promedioCompras = cantidadJabones / acumJabon;
    }

    if(flagAlcohol == 1){
        alert(`A- Del alcohol mas barato hay ${cantidadAlcoholBarato} y lo fabrica ${fabricanteAlcoholBarato}`);
    }else{
        alert("A- No ingreso ningun alcohol");
    }

    alert(`B- El tipo con mas unidades es ${tipoMayor} y el promedio de compras es de ${promedioCompras}`);

    if(cantidadJabones != 0){
        alert(`C- Hay ${cantidadJabones} jabones en total`);
    }else{
        alert("C- No ingreso ningun jabon");
    }
}
