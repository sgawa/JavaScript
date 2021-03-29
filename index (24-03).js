//FOR IN with Objects
const myObject=
{
    x:10,
    y:true,
    z:"abc"

}

for (let key in myObject)
{

    console.log(key,myObject[key]);// X 10 y true z abc
}

// FOR IN with Arrays

const myArr=[true,10,"abc",null];

for (let key in myArr)
{
    console.log(myArr[key]);// true 10 abc null

}

// For OF with Arrays

const myArray1=[true,20,"abc",null];

for(let element of myArray1)
{
    console.log(element);// true,20,abc,null
}


// For Of with Objects

/*let myObjct={
    
    x:true,
    y:50,
    z:"pqr"}

for (let prop of myObjct)
{
    console.log(prop);//Uncaught TypeError: myObjct is not iterable
} */

// Example 1-Regular for loop


for (let i=0;i<5;i++)
{
    console.log(i);// 0 1 2 3 4
}

//console.log(i);// Uncaught ReferenceError: i is not defined--i is not defined in global scope

// Example 2-Regular for loop with Arrays

const myArray2=[10,"pqr",null,true];

for (let i=0;i<myArray2.length;i++)
{
    console.log(myArray2[i]);// 10  pqr null true
}

// Example 3- While Loop

let i=0;

while(i>-5)
{
    console.log(i);// 0 -1 -2 -3 -4
    i--;
}

// Example 4- do while loop

let i1=0;

do 
{
    console.log(i1);// 0 1 2 3 4 5
    i1++;
}while(i1<5);

// Example 5- For In loop with Objects

const myObj5={
    a:10,
    b: true,
    c: "abc"
}

for( let key in myObj5)
{
    console.log(myObj5[key]);// 10 tru abc --Here a,b,c are the keys.
    console.log(key); //a b c

    // If we use dot notation then 
    console.log(myObj5.key);// undefined for all the values located in myObj5

}

// Example 6-For In loop with objects with inherited properties

const myObject1=
{
    a: true,
    b:"abc",
    c: null,
    d:150,
    //key:"inherited"
}

//Object.prototype.globalProp="Inherited properties";

for(let key in myObject1)
{
console.log(key,myObject1[key]);//a true b abc c null  d 150 globalProp Inherited properties
}

// Example 7-For In loop with Arrays

const myArr1=[{},{},10,null];

Array.prototype.globalProp="Global array property";

for (let key in myArr1)
{
    console.log(key,myArr1[key]);//0 {}   1 {}    2 10    3 null  globalProp Global array property
}

// Example 8-For of with Arrays

const persons=[
{
    name:"John",
    age: 25
},

{
    name:"Peter",
    age: 30

}
]

for (let person of persons)
{
    console.log(person);//{name: "John", age: 25}    {name: "Peter", age: 30}
    console.log(person.name);//John  Peter
    console.log(person.name+ " "+ person.age);//John 25   Peter 30


}

//console.log(person);//Uncaught ReferenceError: person is not defined-because person is valid for the block only.

// If statement example:

let val=10;
if(val>5)
{
    val+=20;
}
console.log(val);//30


// if else statement example

let val1=10;
if(val1<5)
{
  val1+=10;
}
else
{
    val1-=20;

}
console.log(val1);//-10


// Switch statement example

let month=2;

switch(month)
{
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");// this will be output=feb
        break;
    case 3:
        console.log("March");
        break;

    default:
        console.log("Default month");
}

// ternary Operator

let value=11;

value ?
  console.log("The value is truthy")// output will be this.
  :
  console.log("The value is falsy");

/*
  let value1=11;
  let value2=22;

  (value1&value2)
   ? myFunction1(value1,value2)
   : myFunction2();*/

// ternary Operator example

let value3=1;

console.log(value3>0 ? value3 : -value3);//1

value4=-5;

console.log(value4 >0 ? value4 : -value4);//5 

// Example 1-If statement

let i3=10;

if(i3>0)
{
    console.log(i3);//10
}
if(i3)
{
    console.log(i3);//10
}

// Example 2-If--else statement

const myArray3=["abc",12,true,null,14,25];

if(myArray3.length>5)
{
    console.log("Array is large");// this ouput is printed.
}

else
{
    console.log("Array is small");
}

// Example 3:Chaining if and if--else statement

let color="blue";

if(color==="green")
{
    console.log("this is green color");
}
else if(color==="red")
{
    console.log("this is red color");
}
else if(color==="yellow")
{
    console.log("this is yellow color");
}

else
{
    console.log("This is default color");// this o/p will be printed.
}


// Switch Statement

let color1="blue";

switch (color1)
{
    case "green":
    console.log("this is green color");
    break;

    case "yellow":
    console.log("this is yellow color");
    break;

    case "red":
    console.log("this is red color");
    break;

    default:
    console.log("this is unavailable color");// this output will be printed
    break;
    
}

// Example 5 : Ternary Operator

let i4=10;
let j3;

j3= i4<100 ? console.log(i4) : console.log(j3);//10

i4>=10 && j3
 ? console.log("condition is true")
 : console.log("condition is false");// this o/p will be printed

console.log(j3);

// Challenge 1:

const myObject5={
  key1: true,
  key2: null,
  key5:"abc",
  key3 : null,
  key6: 10
};

for(let key in myObject5)
{
 
if(key==="key1" || key==="key3")
{
    console.log(myObject5[key]);// true null
}
}

// Challenge 2:

const myNumbers=[
1234,
4568,
4789,
4599,
1256,
1274
];

let newRandomNumber;

newRandomNumber=myNumbers.unshift(4523);

console.log(myNumbers);

if(newRandomNumber===myNumbers)
{
    console.log("Not matching");
}
else
{
    console.log("matching");
}
