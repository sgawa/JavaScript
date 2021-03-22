
;(function()
    {
        console.log("Hello World");


    })()


    let a;
    a=10// Assignment expression*/


    //5= true;//Uncaught SyntaxError: Invalid left-hand side in assignment

    4 <= 10 <=20 ||5// true

    if(true)
    {
        console.log("Hello from 'if' statement");//Hello from 'if' statement
    }

// Expression Statement

console.log(4+3);// 7-Expression Statement

//console.log(console.log*4+3););//index(20-03).js:27 Uncaught SyntaxError: Unexpected token ')'

console.log(console.log(4+3));// undefined  Expression Statement

let a;
a=5

console.log(a);//5

console.log(true);// true

true;

//console.log(true;);// index(20-03).js:40 Uncaught SyntaxError: missing ) after argument list


//Challenge 1:

const myObject={
    x:10,
    y:true
}

delete myObject.x;// this is an expression statement

console.log(delete myObject.x);// true

console.log(delete myObject.y);// true

console.log(delete myObject.z);// true

// Challenge 2

function fn()
{
    console.log("Greetiong from the 'fn function");

    return function(a)
    {
        console.log(a);
    };
}

fn()//Greetiong from the 'fn function
(true)// true because it is dependent on fn() on above statement.

// Strict mode

"use strict ";

function myFn()
{
    a=true;

    console.log(a);
}
myFn();

console.log(a);// true

//Global Scope

var a1=10;
let b=true;

console.log(a1);//10

console.log(b);// true

console.log(window.a1);//10

console.log(window.b);// undefined

const c="abc";

console.log(c);//abc

console.log(window.c); //undefined

function myFunction(a1)
{
    console .log(a1);//undefined
    console.log(b);// true because in the function we didn't pass b as a argument ,so it takes global scope value = true which declared in the beginning

}

console.log(myFunction());// undefined

console.log(myFunction);//ƒ myFunction(a){ console .log(a1);}

console.log(window.myFunction);//ƒ myFunction(a){console .log(a1);}

//Here a,b,c are defined in global scope and they are available for global and inner scope also.


// Function Scope

let e;
function myFunction(a3,b1)
{
    const c1=true;

    console.log(c1);// true

    console.log(d);//Uncaught ReferenceError: d is not defined

    console.log(e);// undefine because the value of e is declared out of function,not in function body.

    console.log(a3,b1);
}

myFunction();
myFunction(2,3);// 2 3

console.log(c1);//Uncaught ReferenceError: c1 is not defined

console.log(a3);//Uncaught ReferenceError: a3 is not defined

console.log(b1);//Uncaught ReferenceError: a3 is not defined

//Scope Chain

const c1=3;
function sum(a,b)
{
    //const c=2;
    function mult(a,b)
    {
        return a*b*c1;
    }

console.log(mult(10,5));//150--first it will search for the local variable,but not found in body hence it picks up the global value of c1.

return a+b;
}

const result=sum(10,5);

console.log(result);//15

// Undeclared variable

a=10;// variable "a" will be declared in the global scope

console.log(a);

const myFunction1=function()
{
    b=5;// variable "b" will be declared in the global scope
    console.log(b);//5
}

myFunction1();

console.log(b); //5 


// Use strict

"use strict";

//d=10;// uncaught refrence error

function myFunction6()
{
    b7=5;// uncaught refrence error
}

myFunction6();


// Use of strict mode in the function

//strict mode will be applicable only in function body,not in the outside

p=10;

function myFun2()
{
    "use strict";
    q=5;

    console.log(q);//Uncaught ReferenceError: q is not defined

}

myFun2();




