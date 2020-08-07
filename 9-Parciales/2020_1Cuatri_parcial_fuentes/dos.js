function mostrar()
{
  let tipo;
  let cantidad;
  let precio;
  let cantidadTotal = 0;
  let descuento15;
  let descuento25;
  let importe;
  let importeFinal;
  let importeTotal = 0;
  let cantidadMayor;
  let precioMayor;
  let tipoMayor;
  let tipoCaro;
  let seguir;
  let flag = 0;

  do{
    tipo = prompt("Ingrese un tipo de producto (arena, cal o cemento)");
    while(tipo != "arena" && tipo != "cal" && tipo != "cemento"){
      tipo = prompt("Error! Ingrese un tipo de producto valido (arena, cal o cemento)");
    }
    cantidad = parseInt(prompt("Ingrese la cantidad"));
    while(cantidad <= 0 || isNaN(cantidad)){
      cantidad = parseInt(prompt("Ingrese una cantidad valida"));
    }
    precio = parseInt(prompt("Ingrese el precio"));
    while(precio <= 0 || isNaN(precio)){
      precio = parseInt(prompt("Ingrese un precio valido"));
    }

    cantidadTotal = cantidadTotal + cantidad;
    importe = cantidad * precio;
    importeTotal = importeTotal + importe;
    
    if(flag == 0){
      flag = 1;
      cantidadMayor = cantidad;
      precioMayor = precio;
      tipoMayor = tipo;
      tipoCaro = tipo;
    }
    if(cantidadMayor < cantidad){
      tipoMayor = tipo;
    }
    if(precioMayor < precio){
      tipoCaro = tipo;
    }



    seguir = prompt("Desea seguir?(s/n)");
  }while(seguir == 's');

  descuento15 = 15 * importeTotal / 100;
  descuento25 = 25 * importeTotal / 100;

  if(cantidadTotal >= 30){
    importeFinal = importeTotal - descuento25;
  }else if(cantidadTotal >= 10){
    importeFinal = importeTotal - descuento15;
  }else{
    importeFinal = importeTotal;
  }

  alert(`El importe total a pagar sin descuentos es de $${importeTotal}`);
  if(importeFinal != importeTotal){
    alert(`El importe total a pagar con descuentos es de $${importeFinal}`);
  }
  alert(`El tipo con la mayor cantidad de bolsas es ${tipoMayor}`);
  alert(`El tipo de producto mas caro es ${tipoCaro}`);
}
