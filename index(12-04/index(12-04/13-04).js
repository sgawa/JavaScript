// index 12-04/13-04

const myArray=[10,"abc",true,undefined,null,[1,2],{}];

console.log(true,myArray.includes(true));// true true

console.log("abc",myArray.includes("abc")); //abc true

console.log(undefined,myArray.includes(undefined));// undefined true

console.log("abc","starting from index 3",myArray.includes("abc",3));// abc starting from index 3 false

console.log([1,2],myArray.includes([1,2]));// (2) [1, 2] false

// Challenge 1:

const tags=[
    ["javascript","es6"],
    ["css","flexbox"],
    ["html","web-browser"]
];

const fruits=[
    {title: "Orange", quantity:10},
    {title: "apple", quantity:15},
    {title: "Mango",quantity:5}
];

const primitiveTypesArray=[
  25,
  "x",
  true,
  undefined,
  null
];


const elementIsIncluded=(searchElement,array)=>
{
  if(typeof searchElement !="object")
  {
      return array.includes(searchElement);
  }
  if (typeof searchElement =="object")
  {
      return array.map(element=>JSON.stringify(element)).includes(JSON.stringify(searchElement));
  }

};

console.log(elementIsIncluded(["css","flexbox"],tags));// true

console.log(elementIsIncluded(["es6","javascript"],tags));// false

console.log(elementIsIncluded({title: "Orange", quantity:10},fruits));// true


console.log(elementIsIncluded(25,primitiveTypesArray));// true

console.log(elementIsIncluded("abc",primitiveTypesArray));// false

//Challenge:

const myNumbers=[123,50,27];

const pushIfUnique=(inputArray,newElement)=>
{(inputArray.includes(newElement))  ?

    console.log(newElement + " is already in the array") :

    inputArray.push(newElement);

};

pushIfUnique(myNumbers,50);//50 is already in the array

console.log(myNumbers);

pushIfUnique(myNumbers,12);

console.log(myNumbers);//4) [123, 50, 27, 12]

console.log(pushIfUnique(myNumbers,12));//12 is already in the array

