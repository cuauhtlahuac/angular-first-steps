// Link a decoradores: https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators

/*
  Los decoradores le dan nueva funcionalidad a la clase, es una funcion que agrega cosas. Angular los usa para identificar los diferentes tipos de clases.
*/

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(
	constructor: T,
) {
	return class extends constructor {
		newProperty = 'new property';
		hello = 'override';
	};
}

@reportableClassDecorator
class BugReport {
	reportingURL = 'http://www...';
	type = 'report';
	title: string;

	constructor(t: string) {
		this.title = t;
	}
}

console.log('BUG REPORT', BugReport);

const bug = new BugReport('Needs dark mode');
console.log(bug.title); // Prints "Needs dark mode"
console.log(bug.type); // Prints "report"

// Note that the decorator _does not_ change the TypeScript type
// and so the new property `reportingURL` is not known
// to the type system:
bug.reportingURL;

@reportableClassDecorator
class MySuperClass {
	public myProperty: string = 'ABC123';

	printProperties() {
		console.log(this.myProperty);
	}
}

console.log('My SuperClass', MySuperClass);
const newSuperClass = new MySuperClass();
newSuperClass.printProperties();
console.log(newSuperClass.hello); // El slint no reconoce las propiedades del decorador pero si se imprime
