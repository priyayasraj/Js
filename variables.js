
// var 
var x = 30;

let y = 50; // declaration + assignment

var num; // declare a variable named num
num = 10;// assigning a value to num

let number; // declaration == undefined
number = 60; // assignment

// const == PREFERRED WAY.

//const PI;
//PI = 3.14; // NOT POSSIBLE

// consts always do declaration + assignment
const PI = 3.14;

// undefined vs not defined

//person.name; // NOT DEFINED (ERROR)

let a; // UNDEFINED (TYPE/VALUE)
console.log(typeof(a))

// best (conventional) practices

// camelCase
const personAge = 25;
const personName = 'Abcd';
const companyName = 'tech';
const isSunday = true;
const hasChildren = false;

const age = 36;

// WORST PRACTICES
var b = 43;
let isItASunday = false;