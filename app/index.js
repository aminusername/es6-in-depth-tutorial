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