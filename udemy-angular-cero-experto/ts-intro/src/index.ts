interface Personaje {
	nombre: string;
	pv: number;
	muestraHP: () => void;
	apellido: string;
	fullname?: string;
}

function curar(
	personaje: Personaje,
	curarX,
): void { // Con void indicamos que no retorna nada, aunque JS retorna undefine
	personaje.pv += curarX;
}

const nuevoPersonaje: Personaje = {
	nombre: 'Batman',
	apellido: 'unknown',
	pv: 50,
	muestraHP(): void {
		console.log('Puntos de vida: ', this.pv);
	},
	get fullname() {
		return this.apellido ? `${this.nombre} ${this.apellido}` : `${this.nombre}`
	},
	set fullname(value) {
		[this.nombre, this.apellido] = value.split(" ");
	},
};

curar(nuevoPersonaje, 20);

nuevoPersonaje['fullname'] = 'Bruno Díaz'
console.log(nuevoPersonaje);
