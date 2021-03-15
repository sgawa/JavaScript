var a;

console.log(a);//undefined

//console.log(b);//index.js:5 Uncaught ReferenceError: b is not defined at index.js:5
let c;

console.log(c);

const d;

console.log(d);//Uncaught SyntaxError: Missing initializer in const declaration */


//Example 2-Let

let myNumber1=10;

console.log(myNumber1);
//declaration
let myString;

console.log(myString);
//assignment
myString ='Hello String';

console.log(myString);
//re assignment
myString="New value of String";

console.log(myString);




//Example 3-Var

var myNumber1=10;

console.log(myNumber1);
//declaration
var myString;

console.log(myString);
//assignment
myString ='Hello String';

console.log(myString);
//re assignment
myString="New value of String";

console.log(myString);


//Example-Const

const myBoolean=true;
console.log(myBoolean);//true

//myBoolean=false;
//console.log(myBoolean);//Uncaught TypeError: Assignment to constant variable at index.js:59

const myBoolean=false;//Uncaught SyntaxError: Identifier 'myBoolean' has already been declared


//Challenge 1

const myObject={};
console.log(myObject);

myObject={};//Uncaught TypeError: Assignment to constant variable.at index.js:70

//const myObject={};//Uncaught SyntaxError: Identifier 'myObject' has already been declared 


//Challenge 2

let x=10;
const y=true;

const myObject ={a:x,b:y};

console.log(myObject);

 x=20;

let anotherObject={newA:x,b:y,c:myObject};

console.log(anotherObject);


let a=10;
a=true;

a="string";
a=null;

console.log(a);



myVariable=10;

console.log(myVariable);

myVariable=true;

console.log(myVariable);

myVariable={x:10,y: true};

console.log(myVariable);


//Challenge 3:
let myNewVariable;
let x=true;
let y=10;

myNewvariable ={x:true,y:10};

console.log(myNewVariable);

myNewvariable.y=20;

console.log(myNewVariable);

myNewVariable=null;

//console.log(myNewVariable);

myNewvariable.x=false;

console.log(myNewvariable);





