var a;
var b = 'b';
b = 'bb';
var a = 'aa';

//global scope
var fruit = 'Apple';

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries(){
    countrie = 'Colombia';
    console.log(countrie);
}

countries();
console.log(countrie);