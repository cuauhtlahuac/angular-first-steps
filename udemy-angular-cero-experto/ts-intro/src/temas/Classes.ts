class Powers {
	constructor(
		public fly: boolean,
		public telekinesis: boolean,
		public canLiftKg: number,
		public canRunKph: number,
	) {}
}

class Normal {
	constructor(private name?: string, private address?: string) {}
}

class Hero extends Powers {
	static normal: Normal;
	static initialize(name: string) {
		Hero.normal = new Normal(name);
	}

	constructor(
		public alterEgo: string,
		public age: number,
		private realName: string,
		powers: Powers,
	) {
		super(powers.fly, powers.telekinesis, powers.canLiftKg, powers.canRunKph); // Here we call the constructor of the extended class

		Hero.initialize(this.realName);
	}

	printProfile() {
		return this.alterEgo;
	}
}

const ironMan = new Hero('spiderman', 20, 'Peter Parker', {
	fly: false,
	telekinesis: false,
	canLiftKg: 100,
	canRunKph: 60,
});

console.log(ironMan);
console.log(ironMan.printProfile());
