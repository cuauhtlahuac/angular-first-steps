class Hero {
	// Private, Public, Static: Es el alcance o visibilidad de los mismos

	/*
		Este bloque luce parecido a una interface, pero:
			- Las interfases no se compilan a js
			- Las interfases son como clases tontas
	*/
	private alterEgo: string = 'ego'; // Solo visible dentro de esta clase
	public age: number = 0; // Afuera 
	private realName: string = 'real';
	static something: any = 'something'; // Static property que se puede acceder sin la necesidad de instanciarla. ex: Hero.something, para acceder dentro de la clase escribir Hero.something

	printProfile() {
		return this.alterEgo + ' ' + this.realName + ' ' + Hero.something
	}
}

const ironMan = new Hero();
console.log(ironMan.printProfile());



