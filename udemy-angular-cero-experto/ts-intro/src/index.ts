interface Pasajero {
  nombre: string;
  hijos?: string[];
}


const pasajero1: Pasajero = {
  nombre: 'Melisa'
}

const pasajero2: Pasajero = {
  nombre: 'Luis',
  hijos: ['Gabriel', 'Luisa']
}

function  imprimeHijos(pasajero: Pasajero) {

  const cantidadHijos = pasajero.hijos?.length || 0; // ? secure operator o encadenamiento opcional

  return cantidadHijos;
}

console.log(imprimeHijos(pasajero1));
console.log(imprimeHijos(pasajero2));
