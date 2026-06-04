let destinos = [];
const registrarDestino = (destino, fecha, transporte) => {
    const nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        costo: calcularCosto(destino, transporte)
    }
    destinos.push(nuevoViaje);
    
}

const calcularCosto = (destino,transporte) => {
  let costoBase = 0; 
  if ( destino === "Paris"){
    costoBase = 500;
  }
  else if ( destino === "Londres"){
    costoBase = 400;
  }
  else if ( destino === "New York" ){
    costoBase = 600;
  }

  if(transporte === "Avión"){
    costoBase += 200;
  }
  else if (transporte === "Tren") {
        costoBase += 100;
    }

    return costoBase;
}

const mostrarItinerario = () => {
    for (const viaje of destinos) {
        console.log(`Destino:  ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Costo: $${viaje.costo}`);
        console.log("---------------------------");
    }
}
 export {registrarDestino};
 export {mostrarItinerario};