//17-03-2021

function myFunction()
{

}
console.log(myFunction);

myFunction();

console.log(myFunction());//undefined

const myFunctionResult=myFunction();

console.log(myFunctionResult);// undefined

//console.log(myFunctionResult());//index.js:17 Uncaught TypeError: myFunctionResult is not a function

console.log(myFunction(10,true));// undefined output because we didn't mention the arguments in the function call.

//example 2:

function myFunction1(a,b)
{
    console.log(a);
    console.log(b);
}

myFunction1(10,5);// 10, 5

myFunction1(true,null);// true null

myFunction1();// undefined  undefined because we are passing no arguments into function and so it displays the output two times one for a and second for b.

console.log(myFunction1(10,20));// 10 20 undefined because return is not specified.

// Example 3:

function myFunction2(a,b)
{
    console.log(a);
    console.log(b);
}
console.log(myFunction2(10,20));// undefined because return keyword is not defined

//console.log(a);//index.js:46 Uncaught ReferenceError: a is not defined
//console.log(b);// error will be shown at 46,not in this step because JS search engine will stop above only,and will not continue further because of the error.

// Example 4: Resuse parameter names

function myFunction3(a,b)
{
    console.log(a,b);
    //console.log(b);
}
function myFunction4(a,b)
{
    console.log(a);
    console.log(b);
}
//console.log(a);

myFunction3(1,4);// 1,4

myFunction4(4,9);// 4,9

const a=4;

const b=true;

console.log(a,b);// 4, true

// Example 5-add return keyword

function sum(a,b)
{
    return a+b;

}
sum(10,58);

console.log(sum(14,8));//22

console.log(sum("abc",9));//abc9

console.log(sum());//NAN

//Exmaple 6:- how code works after return keyword

function myFunction5(a)
{
    console.log(a);
    return a;// function stops here only as it gets the result of a.
    console.log(a);// JS will not perform this step

    const c=50;// JS will not perform this step
    console.log(c);// JS will not perform this step

}

myFunction5(12);

//myFunction5(21);

// Challenge 1:

function mult(a,b,c)
{
    const result=a*b*c;

    console.log(result);
}

mult(10,1,2);//20

mult(0,0,1);//0

mult("abc",9,0);//NAN

mult();// NAN

console.log(mult(10,2,3));// 60 and function returns undefined.

// Challenge 2:

function concatenateStrings(a,b)
{
    return a +" " + b;

}

console.log(concatenateStrings("Hello","World"));// HelloWorld

// Challeneg 3:

function outerFunction(a,b)
{
    function innerFunction(c)
    {
        return c*c;
    }

    const sum=a+b;

   const res=innerFunction(sum);
   console.log(res);

}

outerFunction(10,20);

//innerFunction(10);

// Example 1 of Function expression

//function(){}//Uncaught SyntaxError: Function statements require a function name

//Example 2: Assing function expression to variable

const myFunction11=function() {};

console.log(myFunction11());

// example 3: settimeout 

setTimeout(function(){

    console.log("delayed message");

},3000);

// example 4: setInterval

 i=1;
setInterval (function(){
  
    console.log("Message logged each second... "+i);
    i++;

},1000);


//Challenge 1:

 i=1;
myInterval=setInterval(function(){

    console.log("Here is message number "+ i);

    i++;

},2000);

setTimeout(function(){
    clearInterval(myInterval);
},10000);


// Arithmetic Operators

let a1=10;
let b1=20;

console .log(a1+b1);
console .log(a1/b1);
console .log(a1*b1);
console .log(a1-b1);


 a1="abc";
 b1=10;

console .log(a1+b1);// abc10
console .log(a1/b1);//NAN
console .log(a1*b1);//NAN
console .log(a1-b1);//NAN

a1="hello";
b1="world";

console .log(a1+" " + b1);

