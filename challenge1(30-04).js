// Challenge 1-Sum Numbers


"use strict";

function sum(...args)
{
    var total;

    total=args.reduce((acc,ele)=> acc+ele,0);

    console.log(total);

}

sum(1,2);//3

sum(10,20,40);//70

//Challemge 2-Hoisting

"use strict";

var a=5,b=10;

if(b>a)
{
    let c=2;
    c=a+b+c;
    console.log(c);//17


}

console.log(c);//challenge1(30-04).js:34 Uncaught ReferenceError: c is not defined  --because c is defioned outside the scope.




// Challenge 3- ternary operator

"use strict";

function isNumber(a)
{
    return typeof a === "number" ? "That's a number" : "That's not a number";
    
}

console.log(isNumber(10));//That's a number

console.log(isNumber(true));//"That's not a number"

console.log(isNumber("ABC"));//"That's not a number"


// Challenge 4-Array Functions

var mult=(a,b) =>a*b;


setTimeout(function()
{
    console.log(mult(5,10));//50

},1000);    


// Challemge 5-check presence of function parameter--functions as a default parameter

function missingArg()
{
    throw new Error("Function square requires an argument");
}

function square(a=missingArg())
{
    console.log(a*a);
}

square(10);//100

square();//challenge1(30-04).js:72 Uncaught Error: Function square requires an argument



// Challenge 6-Object Destructuring

var obj={
    x:5,
    y:10,
    z:3

};

function mult(object)
{
    var{x,y,z}=object;

    return x*y*z;

}

console.log(mult(obj));//150



// Challenge 7-Destructuring and rest operator

"use restrict";

var a,b,c;

var arr=[1,2,3,4,5,6,7];

 [a,b,...c]=arr;
 //[a, , b,...c]=arr;//c=(4) [4, 5, 6, 7]

 console.log(a);//1

 console.log(b);//2

 console.log(c);//5) [3, 4, 5, 6, 7]


//Challenge 8-Spread operator

"use strict";

var a,b,c,d,arr;

a=[1,2];
b=[4,5];
c=[8,9,10];
d=11;

arr=[0,...a,3,...b,6,7,...c,d];

console.log(arr);//(12) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]



// Challenge 9-Copy Array

"use strict";

var a=[1,2,3];

//var a=[1,2,3,[4,5]];

var b;

b=[...a];// this will copy the array

b.push("newElement");

console.log(a);//(3) [1, 2, 3]

console.log(b);//(4) [1, 2, 3, "newElement"]



// Challenge 10: Template Literal

"use strict";

var cars=[
    {
        brand:"Honda",price:13000,
        brand:"Maruti" , price :120000
    }

];

function carInfo(car)
{
    var s;

    s= car.price <=20000 ? "cheap" : "expensive";

     return `price of my new ${car.brand} is ${car.price} and it is a ${s} car`;//price of my new Maruti is 120000 and it is a expensive car

  
  };

cars.forEach(car=>console.log(carInfo(car)));



// Challenge 11: Object Destructuring

  "use strict";

  var person1={
      name:"Mike",
      info: {
        country:"NY",
        age:35
       
      },

      postQuantity:30
  };


  var person2={
    name:"Alice",
    info: {
      country:"Italy",
      age:45
     
    }
};

function shortPerson(obj)
{
    var{
        name:n,
        info:{country:c,age:a},
        postQuantity:p=0
    }=obj;

    return
    {
     n,
     c,
     a,
     p
    };

}

console.log(shortPerson(person1));

console.log(shortPerson(person2));



// Challenge 12: Iterate over string

"use strict";

var vowelsCount=0;

var vowels=["a","e","i","o","u"];

var str="Today is best day of my life";

for(let i=0;i<str.length;i++)
{
  if(vowels.includes(str[i]))
     vowelsCount ++;

}

console.log(vowelsCount);//8



// Challenge 13-Swap values of two variables

"use strict";

var a="first";

var b="second";

[b,a]=[a,b];

console.log(a,b);// second first























