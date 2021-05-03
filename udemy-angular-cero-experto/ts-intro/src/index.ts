interface SuperHero {
	nickName: string;
	name: string;
	lastName: string;
	age: number;
	address: Address;
	showAddress: () => string;
	realName: string;
}

interface Address {
	street: string;
	country: string;
	city: string;
}

const superHero: SuperHero = {
	nickName: 'Spiderman',
	name: 'Petter',
	lastName: 'Parker',
	age: 30,
	address: {
		street: 'Main St',
		country: 'USA',
		city: 'NY',
	},
	showAddress() {
		return `${this.nickName}, ${this.address.street}, ${this.address.city}`;
	},
	get realName() {
		return `${this.name}, ${this.lastName}`;
	},
	set realName(newRealName) {
		[ this.name, this.lastName ] = newRealName.split(' ');
	},
};

console.log(superHero);

superHero.realName = 'Miles Morales';
console.log(superHero);
console.log(superHero.showAddress());
