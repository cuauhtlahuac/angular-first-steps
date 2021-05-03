interface Personaje {
	// Es un forma de indicar como queremos que un objeto luzca
	nombre: String;
	hp: Number;
	habilidades: String[];
	puebloNatal?: String; // El parentesis le dice que TS que es opcional
}

const personaje: Personaje = {
	nombre: 'Strider',
	hp: 100,
	habilidades: [ 'bash', 'Counter', 'Header' ],
};

personaje.puebloNatal = 'Zacatlán de las manzanas';

console.table(personaje)