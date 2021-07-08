

let primeNumber = 7;
primeNumber = 'seven';


let integer = 10;
let decimal = 23.6;
let negative = -70;
let negativeDecimal = -8.21;

typeof negative; 

console.log(typeof integer);



const sentence = 'I am the 1st, sentence!';
const anotherSentence = "2. It is raining outside!!";
const backTickedStr = `%% &, 8 I am a backticked string`;

console.log(typeof sentence);



const isRaining = true;
const hasPakoda = false;
const isWishingToHavePakoda = true;

console.log(typeof isRaining);

let nothing = null; 

// undefined
let noOfChairs; 

// collection types
// array

// HOMOGENOUS
const fibonacciSeries = [1, 1, 2, 3, 5, 8, 11];
const friends = ['a', 'b', 'c', 'd'];
const didPractice = [true, false, true, true];

// HETEROGENOUS
const assorted = [
    10, 21.5, 'word', false, undefined, null, 
    [1, 2, 3],
    { name: 'Priya' },
    function () {
        console.log('From inside an array')
    }
];

assorted[8]();


// object
// dictionary, Map, HashedMaps
// {}
// key: value

const person = {
    name: "Priya",
    age: 22,
    isAdult: true,
    friends: ['a', 'b', 'c'],

    address: {
        city: 'Pune',
        state: 'MH',
        zip: 411047
    },
    name: "abcd", // overrides the first key
    petNames: ["dog", "cat"],
    printName: function () {
        console.log('Priya');
    }
}

 
console.log(person.name);
person.address.zip; 
person.friends[1]; 
person.printName();

// function
function sayHello() {
    console.log('Hello, World!');
}

console.log(typeof sayHello);