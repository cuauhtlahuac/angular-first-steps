// GENERICOS

function whatTypeItIs<T> // T especifica que es generico, dependerá del tipo de dato que se envíe en el argumento de forma implicita 
(argument: T){
  return argument;
}

let iamString = whatTypeItIs('Soy string')
let iamNumber = whatTypeItIs<number>(100) // Tambien se puede especificar el dato al llamar la función
let iamArray = whatTypeItIs([1,3,5]) // ó de forma implicita se identificará el tipo de dato