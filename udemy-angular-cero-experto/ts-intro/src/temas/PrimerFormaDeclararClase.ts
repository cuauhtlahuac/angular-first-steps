class HeroOld {
	// Private, Public, Static: Es el alcance o visibilidad de los mismos

	/*
		Este bloque luce parecido a una interface, pero:
			- Las interfases no se compilan a js
			- Las interfases son como clases tontas
	*/
	private alterEgo: string; // Solo visible dentro de esta clase
	public age: number; // Afuera 
	private realName: string;
	static something: any = 'something'; // Static property que se puede acceder sin la necesidad de instanciarla. ex: Hero.something, para acceder dentro de la clase escribir Hero.something

	constructor( alterEgo: string, age: number, realName: string ) {
		this.alterEgo = alterEgo;
		this.age = age;
		this.realName = realName; 
	}

	printProfile() {
		return this.alterEgo + ' ' + this.realName + ' ' + HeroOld.something
	}
}


