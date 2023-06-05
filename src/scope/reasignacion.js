var firstName; //Declarando, se le asigna undefined
firstName = "Oscar";
console.log(firstName);

var lastName = "David"; //Declarar/asignar
lastName = "Ana"; //Reasignar
console.log(lastName);

var secondName = "David";
var secondName = "Ana";
console.log(secondName);

//Let

let fruit = "Apple"; //Declarar y asignar
fruit = "Kiwi"; //Reasignar
console.log(fruit);

//let fruit = "Banana"; no se puede re declarar con let

//Const
const animal = "Dog"; //declara y asigna
//animal = "cat"; no se puede reasignar a una constante

const vehicles = [];
vehicles.push("Bochito");
console.log(vehicles);
vehicles.pop();
console.log(vehicles);