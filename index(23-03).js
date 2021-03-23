//Challenge 1-Function scope

const b=2;
let d=15;

function myFn1(p)
{
    let b;
    let d=10;
    myFn2();
}

function myFn2(p)
{
    let c=5;
    console.log(p,b,c,d);


}

myFn1();// undefined,2,5,15 -b=2 because we take globally declared value and same for d also.

// Challenge 2 -Use "strict mode"

"use strict";

//let m;

function myFunction()
{
    let m=2;
    return m;// uncaught refernce error

}

myFunction();

// Challenge 3-Callback function

setTimeout(function myFunction10()
{
console.log("Hello javascript");
} ,2000);

//myFunction10();//Uncaught ReferenceError: myFunction10 is not defined

// Arrays

const myArr=[1,2,3];
console.log(myArr);//[1,2,3]

const myArr1=new Array(1,2,3);
console.log(myArr1);//[1,2,3]

const myArr2=[1,2,3,4];

console.log(myArr2[0]);//1

console.log(myArr2[1]);//2

console.log(myArr2.length);//4-- since array is an object length will not count from index value.

//Modify Array Values

const myArr3=[1,2,3,4];

console.log(myArr3[0]);//1

//updating 3rd index value
myArr3[2]="abc";
console.log(myArr3);//[1, 2, "abc", 4]
console.log(myArr3[2]);//abc

//Adding 5th index value
myArr3[5]=true;
console.log(myArr3);//[1, 2, "abc", 4, empty, true]

//PUSH method

const myArr4=[1,5,6,4];

console.log(myArr4);//(4) [1, 5, 6, 4]

myArr4.push(3);

console.log(myArr4);//(5) [1, 5, 6, 4, 3]

myArr4.push(false);

console.log(myArr4);//(6) [1, 5, 6, 4, 3, false]

// POP method

const myArr5=[1,6,7,8];
console.log(myArr5);//(4) [1, 6, 7, 8]

myArr5.pop();
console.log(myArr5);//(3) [1, 6, 7]

const removedElement= myArr5.pop();

console.log(myArr5);//(2) [1, 6]

console.log(removedElement);//7

// Shift Method

const myArr6=[4,7,8,9];
console.log(myArr6);//(4) [4, 7, 8, 9]

myArr6.shift();
console.log(myArr6);//(3) [7, 8, 9]

const removeE=myArr6.shift();
console.log(myArr6);//(2) [8, 9]
console.log(removeE);//7

const myArr9=[];

myArr9.shift();

console.log(myArr9);//[]


//UnShift method

const myArr7=[1,7,8,9];
console.log(myArr7);//4) [1, 7, 8, 9]

myArr7.unshift(0);

console.log(myArr7);//(5) [0, 1, 7, 8, 9]

const myArr8=[];

myArr8.unshift(1);

console.log(myArr8);//1

// Example of empty array

const myArr10=[];
console.log(myArr10);// []

// Example 20Adding values to empty array

const myArr11=[];
myArr11[0]="first";

console.log(myArr11);//["first"]

myArr11.push("Second");

console.log(myArr11);//(2) ["first", "Second"]

// Modify Array elements

const myArr12=[12,0,1,true,{}];

console.log(myArr12);//(5) [12, 0, 1, true, {…}]

myArr12[1]="second element";

console.log(myArr12);//(5) [12, "second element", 1, true, {…}]

myArr12[4].newProp=10;

console.log(myArr12);//(5) [12, "second element", 1, true, {…}] 4: {newProp: 10

console.log(myArr12[4].newProp);//10

// Example 4

const myArr13=[1,10];

//If the property value in the Object is numeric then we can't use the dot notation.
//console.log(myArr13.0);//Uncaught SyntaxError: missing ) after argument list

console.log(myArr13[0]);//1

//Delete array element

const myArr14=[true,null,1,{},"abc"];

delete myArr14[1];

console.log(myArr14);//(5) [true, empty, 1, {…}, "abc"]

console.log(myArr14[10]);//undefined

myArr14.pop();

console.log(myArr14);//(4) [true, empty, 1, {…}]

myArr14.pop();

console.log(myArr14);//(3) [true, empty, 1]

myArr14.shift();

console.log(myArr14);//[empty, 1]

//Compare Arrays

const myArr15=[1,2,3];
const myArr16=[1,2,3];

console.log(myArr15===myArr16);// false because objects are different and the values are pointers

const copyOfmyArr15=myArr15;

console.log(copyOfmyArr15===myArr15);//true

console.log(myArr15.toString()===myArr16.toString());//true because toString method converts into string values and hence returns true value.

//Challenge 1:

const myArr17=[true,null];

myArr17.unshift("Hello");
console.log(myArr17);//["Hello", true, null]

myArr17.unshift(100);
console.log(myArr17);//(4) [100, "Hello", true, null]

// Challenge 2:

const myArr18=[1,2];

myArr18[10]="abc";

console.log(myArr18);//[1, 2, empty × 8, "abc"]

// Challenge 3 : Array of Objects

const arrayOfCars=[
    {
        carBrand:"Ciaz",
        price:20000
    },
    {
        carBrand:"BMW",
        price:80000
    },
    {
        carBrand:"Sumo",
        price:10000
    }

    
];

//arrayOfCars[3].newProp="Description";

console.log(arrayOfCars);//(3) [{…}, {…}, {…}]

const newArrayOfCar={ Brand : "Wagonr",  price: 50000};

arrayOfCars.push(newArrayOfCar);

console.log(arrayOfCars);//(4) [{…}, {…}, {…}, {…}]


// For loop with array

const myArr19=["First","Second","Third"];

for(let i=0;i<myArr19.length;i++)
{
    console.log(myArr19[i]);// first second third
}


// while loop

let i=0;

while(i<5)
{
    console.log(i);// 0 1 2 3 4
    i++;
}

// do -while loop

let i1=0;
do
{
    console.log(i1);// 0 1 2 3 4
    i1++;

}
while(i1<5);


