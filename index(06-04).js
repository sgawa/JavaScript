// Let

let a=10;

console.log(a);//10

function fn()
{
    let b=true;
    console.log(b);// true
}

fn();

//console.log(b);// Uncaught ReferenceError: b is not defined


// Redeclaration using let

let d11=false;

//let d11=true;

console.log(d11);// false

function fn1()
{
    let d11=10;
    console.log(d11);//10
}

fn1();

// Hoisting;

e=5;
//let e;//Uncaught ReferenceError: Cannot access 'e' before initialization


//Const-

const myValue=10;   

//const myValue=20;//Uncaught SyntaxError: Identifier 'myValue' has already been declared

const myConst=[];

myConst.push("NewElement");

myConst.push("AnotherElement");


const anotherConst={};

anotherConst.a=10;

anotherConst={
    b:20
};

const primitiveTypeConst=null;

primitiveTypeConst=undefined;//Uncaught TypeError: Assignment to constant variable. */

// variable usage guidelines- 1.Good code becomes readable to programmer

var personName="Alice";

var personCity="New York";

function greet(personName,personCity)
{
    greetPerson="Hello "+ personName  + "  from" +  personCity;
    return greetPerson;
}

console.log(greet(personName,personCity));


//2.Always declare variable before usage

a=10;
var a;

//3.Always use "strict" at the beginning

"use strict";
 var b=10;

function fn()
{
    var d=b;
    return d;
}

fn();


// Where to use Const?

function multplier(a)
{
    const MULT=10;
    return a*MULT;
}

console.log(multplier(3));// 30

console.log(multplier(5));//50

// example 2:

const sum=function(a,b)
{
  return a+b;
};

console.log(sum(3,2));//5

// Where to use Let-Example 1- Let is temnparaory block and available for that block only

for (let i=0;i<5;i++)
{
    console.log(i);// 0 1 2 3 4 5 
}

// Where to use Var?

var person={
    name: "bob",
    age: 21
};

function updatePerson(person)
{
 let updatedPerson={};

 if(person.name)
 {
     updatedPerson.name=person.name;
 }

 updatedPerson.updatedAt=new Date();

 return updatedPerson;

}

console.log(updatePerson(person));//{name: "bob", updatedAt: Tue Apr 06 2021 19:16:58 GMT+0530 (India Standard Time)


//var a3;
//a3=10;

function fn12(a3)
{
    console.log(a3);// undefined
}

fn12();

// Var Lifecycle

//-- without assignment
console.log(a4);// undefined
var a4;

//-- with assignment
b2=20;
console.log(b2);//20
var b2;

//--with function
function fn3()
{
    console.log(c);// undefined
    var c;

    d2=10;
    console.log(d2);//10
    var d2;
}

fn3();

console.log(c);//Uncaught ReferenceError: c is not defined

console.log(d2);//Uncaught ReferenceError: d2 is not defined


// Undecleared variable lifecycle:

function fn4()
{
  function fn5()
  {
      console.log(a7);//Uncaught ReferenceError: a7 is not defined
      a7=10;
  }

  fn5();

  console.log(a7);

}

fn4();

console.log(a7);
