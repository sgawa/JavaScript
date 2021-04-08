// Arguments in the function--regular function declaration

function sum()
{
    console.log(arguments);
    console.log(typeof arguments);// object
    console.log(Array.isArray(arguments));//false
    const argumentsArray=Array.from(arguments);
    console.log(argumentsArray);//(4) [1, 2, 3, 4]

}

sum(1,2,3,4); 

// Arrow function expression

const sum2 = () =>
{
    console.log(arguments);//Uncaught ReferenceError: arguments is not defined
    console.log(typeof arguments);
    console.log(Array.isArray(arguments));
    const argumentsArray=Array.from(arguments);
    console.log(argumentsArray);

};

sum2(1,2,3,4,5,6); 

// For EACH

const myArray=[1,true,"abc"];

for(let i=0;i<myArray.length;i++)
{
    console.log(myArray[i]);// 1 true abc
}

// forEach use:
myArray.forEach(element=>(console.log(element)));// 1 true abc 

// Challenge 1:
// using For Loop

const myCities=["London","New York","America"];

const arrayInfo=(element,index)=>element + " is located at the index "+ index + " in the myCities array";

    for ( let i=0; i<myCities.length;i++)
    {
        console.log(arrayInfo(myCities[i],i));
    }


// using ForEach loop

myCities.forEach((element,index)=>
    console.log((element + " is located at the index "+ index + " in the myCities array")));

// OR second solution using forEach

myCities.forEach((element,index)=> console.log(arrayInfo(element,index)));//London is located at the index 0 in the myCities array  */

// Map--Example usinmg for loop

const myNumbers=[1,5,9];

let squareNumbers=[];

for (let i=0;i<myNumbers.length;i++)
{
    squareNumbers.push(myNumbers[i] * myNumbers[i]);
}

console.log(squareNumbers);//(3) [1, 25, 81] 

// Map--Using map
const myNumbers=[1,5,9];

let squareNumbers=myNumbers.map(element=>element*element);

console.log(squareNumbers);//(3) [1, 25, 81]


// map() with external function and index

const myNumbers=[1,5,9];

const squareNumbers=(element,index)=>{console.log("Element at the "+ index + of + element);

return element* element;
};

let mySquareNumbers=myNumbers.map(squareNumbers);
console.log(mySquareNumbers);

// Map with math.pow() function

const myNumbers=[1,5,9];

let mySquareNumbers=myNumbers.map(element=>Math.pow(element,2));

console.log(mySquareNumbers);//(3) [1, 25, 81]


// Challenge 3-map() JSON to object

const postJSON=[
    '{"postId":1355,"commentsQuality":5}',
    '{"postId":1455,"commentsQuality":15}',
    '{"postId":1555,"commentsQuality":10}'
];

 //for loop
var posts1=[];
for (let i=0; i< postJSON.length; i++)
{
    posts1.push(JSON.parse(postJSON[i]));

}

console.log(posts1);

console.log(posts1[0].postId);//1355

// map option


const posts=postJSON.map(JSON.parse);

//map option 2:

const posts=postJSON.map(posts=>JSON.parse(posts));  */

// Filter() method

const myNum=[1,55,5,40,20];

const myFilteredNumbers=myNum.filter(num=> num >10);

console.log(myFilteredNumbers);//(3) [55, 40, 20]

console.log(myNum);(5) [1, 55, 5, 40, 20]

// find() method

const myArray=[10,true,[],"abc",{}];

const findArray=myArray.find(findN=> findN==true);

const findArray=myArray.find(element=> typeof element=="number");

console.log(findArray);// true  */


// Challenge 1-find() method

const posts=[
    {postId:1355,commentsQuality:5},
    {postId:1455,commentsQuality:15},
    {postId:1555,commentsQuality:10}
];

const findSinglePost=(postId,posts) =>posts.find(post=> post.postId==postId) ;

console.log(findSinglePost(1355,posts));//{postId: 1355, commentsQuality: 5}

console.log(findSinglePost(1789,posts));// undefined


// every() and some() method

const MyNumbers1=[1,-5,-9,10,15];

const isPositive=element => typeof element=="number" && element > 0;

const allPositiveCheck=MyNumbers1.every(isPositive);

console.log(allPositiveCheck);// false as their are negative numbers also.


const isSomePositive=element=> typeof element=="number"  && element>0;

const somePositiveCheck=MyNumbers1.some(isSomePositive);

console.log(somePositiveCheck);// true it means that some of it numbers are positive.

// Example 2:

const items=[
  {
      title:"Computer",
      quantity:10
  },
  
  {
    title:"Headphones",
    quantity:15
  },

  {
    title:"Phone",
    quantity:7
  },

];

// all items have quantity >5

if(items.every(item=>item.quantity>5)) console.log("All items are available");

// all items have qunatity>0  and some items have qunatity <=5

if(
 items.every(item=>item.quantity>0) && (itme=>item.quantity<=5)) console.log("Some of the items are processed soon");

// some items has quantity as 0

if(items.some(item=>item.quantity==0)) console.log("Some items are sold out");




