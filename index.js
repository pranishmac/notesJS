// console.log("Hello World");
//function and calling
// const name = 'Pushpam';
// function ab(person){
//     console.log(`hello ${person}`);
//     console.log("hello");
// }
// ab(name);




// var,let,const//
//var - redeclare, redefine, scope - functional
/*
var name = "Ram";
var name = "Shyam"; //redeclare
name = "Sita";//redefine / update
console.log(`First : hello ${name}`);

//functional block
function test(){
    var name = "Func Ram";
    console.log(`hello ${name}`);
}

//block
if(true){
    var name = "If Ram";
}

test();

console.log(`Last : hello ${name}`);
*/
/*
//let - cannot be redeclared, can be redefined, scope -- block
let name = "Ram";
//let name = "Shyam"; // not allowed
name = "Redefined Ram";  // redfining allowed
console.log(`hello ${name}`);
if(true){
    let name = "If Ram";
}

console.log(`hello ${name}`);
*/


//Const - redefinition and redeclaration are not allowed, block scoped.
/*
const name = "Ram";
//const name="Shyam"; // not allowed
// name = "Sita"; // not allowed
console.log(`hello ${name}`);
*/

/*
 Let, var , const (https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)
Var can be redeclared and redefined, functionally scoped but it has problem of updating global variable if particular block of code is executed and it has var decalred variable with same name as global variable.
Let can be redefined/ updated but can't be redeclared. Can be redecalred in different scopes.Block scoped.
Const can neither be redefined nor redeclared. but an value of an object of const type can be updated (like object.keyname = newvalue  // wont return error). Block scoped. Const must be initialised during declaration.
*/

/*
// NOTATION arrow
//1st notation
function add(a,b){
    console.log(a+b);
}
add(3,4);

//2nd Notation 
const add1 = (a,b) => {
    console.log(a+b);
}
add1(3,7);
*/

//setInterval function
/*
setInterval( ()=>{
    console.log("Hello");
} 
,2000);
*/


// GLOBAL variable -- module, require, export
/*
console.log(__dirname);
console.log(__filename);
*/


// os,path,res,fs















// setInterval(()=>{
// console.log("hi")
// }, 1000
// );

// setInterval(ab(1),1000);


// function=((a,b)=>
// {console.log(a+b)
// }
// )

// console.log(__dirname);
// console.log(__filename);