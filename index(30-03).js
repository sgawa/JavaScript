//Global execution context
/*console.log("Global execution context");

const a=10;

console.log(a);

function myFunction(a,b)
{
   console.log("This is function execution context");
    return a+b;
}

console.log(myFunction(5,3));// new function execution context is created

console.log(myFunction(10,10));// new function execution context is created


// Execution contexts stack

console.log("Global execution context-root level in the stack");

function firstLevel()
{
    console.log("First level in the stack");

function secondLevel()
{
    console.log("Second level in the stack");

    function thirdLevel()
    {
        console.log("Third level in the stack");

    }

    thirdLevel();
}

secondLevel();


}

firstLevel();


/* // Using "this" in the global execution context

console.log(this);// window

console.log(this===window);// true

this.console.log("This is window method");//This is window method

// Example 2-'this" inside of the function

function myFunction()
{
    console.log(this);
}

myFunction();//Window {window: Window, self: Window, document: document, name: "", location: Location, …}

window.myFunction();//Window {window: Window, self: Window, document: document, name: "", location: Location, …} /*

*/



// Example 3-'this" inside of the function in strict mode

"use strict";

function myFunction()
{
    console.log(this);
}

myFunction();// "this" is undefined

window.myFunction();// "this" is equal to window in strict mode





