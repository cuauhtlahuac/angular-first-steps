function sumar(
	a: number, // primer parametro con tipo de dato
	b: number // segundo parámetro especificado
): number // tipo de dato que será retornado
{
	return a + b;
}
function multiplicar(
	// El orden de argumentos es primero obligatorios luego opcionales
	numero: number,
	otroNumero?: number, // Este es opcional pero para que no truene al siguiente argumento le damos valor default
	base: number = 2, //  Valor opcional deben ir al último
): number
{
	return numero * base * otroNumero;
}

const resultado = sumar(5, 6);
const mResultado = 
multiplicar(
	5, // Toma el argumento numero
	9, // Toma argumento otroNumero
	10, // Asigna valor de 10 para no usar el default 2
)

console.log(resultado);
console.log(mResultado);