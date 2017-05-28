/* Template Literals example*/
let names = ['John', 'James', 'Albert'];

for(let i =0; i < names.length; i++){
    console.log(
        `Good mornin ${names[i]}
        How is life on your planet ${names[i]}`
    )
}


///////////////////////////////////////////////////////////////
/*Spread Operator example*/
let a = [20, 30, 40];
let b = [10, ...a, 50]; //simply we have spreaded a into b
console.log(b);

/*Rest Operator*/
function collect(...a){
    console.log(a);
    for(let i =0; i < a.length; i++){
        console.log(a[i]);
    }
}
collect(1,2,3,4,5);
collect('John', 'James', 'Erik');


///////////////////////////////////////////////////////////////
/*Destucting Assignment on Array*/
let list = [1,2,3];
let [one, two] = list;
console.log(one, two);
/*Destucting Assignment on object*/
let king = {name: "Mufasa", kid: 1};
let {name, kid} = king; //difference is that in Array it looks for the index and in object it looks for the key name
console.log(name, kid);


/////////////////////////////////////////////////////////////////////////////
/*Functions and Methods*/
function cheer(){
    console.log("Wooooohooooo from function with name");
}
///////Anonymous function
let func = function(){
    console.log("Wooooohooooo from let function");
}
func();
////////Arrow functions (anonymous by default)
setTimeout(() => {console.log('Wusssup man?')}, 3000);



//Map helper method
let values = [20, 30, 40];
let double = (n) => {
	return n*2;
}
//let doubled = values.map(double);
// let doubled = values.map((n) => {
//     return n * 2
// });
let doubled = values.map( (n) =>  n*2);
console.log(values, doubled);

let points = [4, 15, 7, 13, 5, 12, 9];
// let above10 = points.filter( (n) => {
//     return n > 10;
// })
 
 let yohoo = "yaho" + "oo".repeat(10);
 console.log(yohoo);
 console.log("butterfly".startsWith("butter"));

 console.log('is Number:',Number.isFinite('50'));

 import {fellowship} from './fellowship';
 console.log(fellowship);

//  import {add, multiply} from './math';
//  console.log(add(5,10), multiply(5,10));

 import multiply from './math';
 import {add} from './math';
 console.log(multiply(500,500), add(150, 250));

 import Animal from './animal';
 console.log(Animal);
 let king2 = new Animal("Jubba The Hut", 10);
 king2.hello();

import Lion from './lion';
let simba = new Lion("Simba", 5, "Yelowish");
simba.hello();
simba.olo();

import Calculator from './calculator';
console.log(Calculator.multiply(4,10));


//Object Prototype
function Wizard(name, house, pet){
    this.name = name;
    this.house = house;
    this.pet = pet;

    this.greet = () => `I am ${this.name} from ${this.house} and I have ${this.pet}`;
}
//with line below we have added a pet_name key to our prototype
Wizard.prototype.pet_name;

Wizard.prototype.info = function() {
    return `So ${this.name} man wussp `
};

let so= new Wizard("Harry", "Gryfindor", "Owl");
so.pet_name = "Something";
console.log(so.info());

//Data Structure in ES6
let setTest = new Set();
setTest.add(5);
setTest.add(45);
setTest.add("Woohoo ");
setTest.add({a: 10, y: 50});
console.log(setTest);

let array = [1,2,3,4,5];
let setArr = new Set(array);
console.log(setArr);
for(let element of setArr.values()){
    console.log(element);
}

let chars = "klasdlaksdjlkajdlkajdlkajdlkasjdklsajd";
let arr = chars.split("");
let setArray = new Set(arr);
console.log(setArray);

//Map
let mapVal = new Map();
mapVal.set("1", "Something");
mapVal.set("2", {x:20, y:'Something too'});
console.log(mapVal);

let numArr = [ [1, 'one'], [2, 'two'], [3, 'three']];
let numArrMap =new Map(numArr);
console.log(numArrMap);
for(let [key, value] of numArrMap.entries()){
    console.log(`Wusuuuuup: ${key} is and ${value}`);
}

const addSuffix = (x) => {
    const concat = (y) =>{
        return x + y;
    }
    return concat;
}

let suf = addSuffix("I am X");
console.log(suf(" and I am Y"));

//Make the function even shorter
const product = x => y => y*x;
let multiple2 = product(2);
console.log(multiple2(10));

//Example of function factory
function mathFunc(operation, value){
    switch (operation){
        case "add":
            return function(addWith){
                return value + addWith;
            }
        case "sub":
            return function(subWith){
                return value - subWith;
            }
        case "multiply":
            return function(multWith){
                return value * multWith;
            }
        case "divide":
            return function(divWith){
                return value / divWith;
            }
    }
}

var addFunc = mathFunc("add", 10);
console.log(addFunc(50));
var subFunc = mathFunc("sub", 50);
console.log(subFunc(36));
var multFun = mathFunc("multiply", 10);
console.log(multFun(10));
var divFunc = mathFunc("divide", 1000);
console.log(divFunc(4));

//addFunc, subFunc, multFunc, divFunc are all closures. 
//They share the same function body definition, but store different lexical environments. 
//In addFunc lexical environment, value is 10, while in the lexical environment for subFunc, value is 50.


var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };   
})();

console.log(counter);
console.log(counter.value);
console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1

//Examples above is also interesting. if you get counter you will get an object which has 3 keys. The values of those objects are
//functions which call anohter function which is changeBy.
//So the counter variable is nothing but an object which their keys hold other functions
//Those three public functions are closures that share the same environment. 
//Thanks to JavaScript's lexical scoping, they each have access to the privateCounter variable and changeBy function.

var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }  
};

var counter1 = makeCounter();
var counter2 = makeCounter();
console.log(counter1.value()); /* Alerts 0 */
counter1.increment();
counter1.increment();
console.log(counter1.value()); /* Alerts 2 */
counter1.decrement();
console.log(counter1.value()); /* Alerts 1 */
console.log(counter2.value()); /* Alerts 0 */

//Notice how each of the two counters, counter1 and counter2, maintains its independence from the other. 
//Each closure references a different version of the privateCounter variable through its own closure. 
//Each time one of the counters is called, its lexical environment changes by changing the value of this variable; 
//however changes to the variable value in one closure do not affect the value in the other closure.



//Making Generators
function* letterMaker() {
    yield 'a';
    yield 'b';
    yield 'c';
}

let letterGen = letterMaker();
console.log(letterGen.next().value);
console.log(letterGen.next().value);
console.log(letterGen.next().value);

function* countMaker(){
    let count = 0;
    while(count < 4){
        yield count++;
    }
}
let countGen = countMaker();
console.log(countGen.next().value);
console.log(countGen.next().value);
console.log(countGen.next().value);
console.log(countGen.next().value);

function* evens(){
    let count = 0;
    while(true){
        count +=2;
        let reset = yield count;
        if(reset){
            count = 0;
        }

    }
}
let sequence = evens();
console.log('next', sequence.next().value);
console.log('true', sequence.next(true).value);
console.log('next', sequence.next().value);

//Iterators by using Generators
//Example below is a simple one without the use of generators
//Pay attention to the Closure in this implementation
const arrayIterator = (array) => {
    let index = 0;
    return {
        next: () => {
            if(index < array.length){
                let next = array[index];
                index++;
                return next;
            }
        }
    }
}
let myArray = ['q','w','e','r','t','y'];
let it = arrayIterator(myArray);
console.log(it.next());
console.log(it.next());

//Now we create Iterator by help of generator
function* arrayIt(){
    // for(let arg of arguments){
    //     yield arg;
    // }

    //make above code shorter
    yield* arguments;
}
let it2 = arrayIt(11,22,33,44);
console.log(it2.next().value);
console.log(it2.next().value);

//Promises
//Promises when gets instantiated would have an arrow function as a parameter and the arrow function itself 
//gets two parameters which are resolve and reject. Resolve is the handle for success and reject is the handle for failure. 
let p = new Promise((resolve, reject) => {
     setTimeout(()=> resolve(`Resolved 
             Promised 
             Data
             and situation got better`), 3000);
});
//Now we need to have access to this promise data or as we call it consuming the process. To do so, we should use
//promise.then method which accepts a function that gets the promises return value once it is fulfilled. We can call it response

p.then(resp => console.log(resp));
//If you want to catch the rejected then you have to change it like below but Promise should not have resolve.
let p2 = new Promise((resolve, reject) => {
    reject(`Data got Rejected buddy`);
});
p2.then(resp => console.log(resp)).catch(error => console.log(error));
//So the way it works is that first it checks the resolve one, if it does not find it then it would pass it to the reject one

//So what happens is that in Promise, we will execute the request and then we continue. 
//When results come then if they are successful we will execute the function in then function and if not it would be function in catch

//HTTP FETCH
const root = 'https://jsonplaceholder.typicode.com/posts/1';
//fetch(root, {method: "GET"}).then(response => console.log(response));
fetch(root, {method: "GET"}).then(response => response.json()).then(json => console.log(json));

//ES7 example for power (exponent operator)
console.log(2**5); //Math.pow(2, 5);

console.log([1,2,3,4,5].includes(5)); // "wonderful".includes("wonder") and we will get true. 
//Now we can apply include on Arrays as well

//ES8 examples and Object Manipulation
let obj = {
    a: 'one',
    b: 'two',
    c: 'three'
}
//Display keys only (properties of the objects)
let keys = Object.keys(obj);
console.log(keys);

//Display values only
let vals = Object.values(obj);
console.log(vals);

//Display both in pairs
let entries = Object.entries(obj);
console.log(entries);
for(let e of entries){
    console.log(`key is: ${e[0]} and value is: ${e[1]}` )
}


//ES8 Async proposal
async function async_one(){
    return "one is from async one function"; 
}

async function async_two(arg){
    if(arg)
        return "two is from async two function";
    else
        throw new Error("Some issues with Async two method");
}

async_one().then(response => console.log(response));
async_two(true).then(response => console.log(response)).catch(error => console.log(error));

async function async_three(){
    const one = await async_one();
    console.log(one, 'So who is next?');
    const two = await async_two(true);
    console.log(two, 'I am done');
}

async_three();

//Promise All
async function async_four(){
    const [res_one, res_two] = await Promise.all([async_one(), async_two(true)]);
    console.log(res_one, res_two);
}
async_four();