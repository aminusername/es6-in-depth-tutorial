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