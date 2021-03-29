// Solution 2-challenge 2
const MIN=1000;
const MAX=9999;


const myNumbers=[
    1234,
    4568,
    4789,
    4599,
    1256,
    1274
    ];

let newRandomNumber;

function getRandomInt(min, max)
 {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1))+min; 
  }


function isNotUnique(newRandomNum)
{
  for (let number of myNumbers)
  {
     if(number===newRandomNum)
     {
         return true;
     }
  }
}

do
{

 newRandomNumber=getRandomInt(MIN,MAX);

}while(isNotUnique(newRandomNumber));

myNumbers.push(newRandomNumber);

console.log(myNumbers);//(7) [1234, 4568, 4789, 4599, 1256, 1274, 5306];

// Task3

const myObject={
  name:"Mike",
  age:25,
  country: "India"
};

Object.prototype.country= "China";

for (let key in myObject)
{
    if(myObject.hasOwnProperty(key))
    {
        console.log(myObject[key]);// Mike 25 India
    }

}

// Task 4--If --else statement with ternary operator

function emptyArray(inputArray)
{
    return inputArray.length>0
    ?
    ("The array is not empty")
    :
    ("The array is empty");
}
    
console.log(emptyArray([1,3]));
console.log(emptyArray([]));

// Challenge 1:

const a1=[];

a1.push("1");
a1.push("abc");
a1.push("xyz");

console.log(a1); // 1 abc xyz

a1.pop();

console.log(a1);// 1 abc


