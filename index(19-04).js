// Example 1- declaration and assignment using array destructuring

const myArray=[1,2,3];

let a,b,c;

a=myArray[0];
b=myArray[1];
c=myArray[2]; 

let[a,b,c]=myArray;// simplest way to declare array using destructuring

console.log(myArray);//(3) [1, 2, 3] 

console.log(c,a,b);// 3 1 2  */

// Example 2-Assignment using array destructuring

const myArray1=[1,2,3];

let a,b,c;

[a,b,c]=myArray1;

const anotherArray=[4,5,6];

[a,b,c]=anotherArray;

console.log(a,b,c);// 4 5 6  */

// Example 3- more variable than elements in the array

const myArr=["a","b"];

const[a,b,c]=myArr;

console.log(a,b,c);// a b undefined  */


// Example 4- default values

const myArr=["a"];

const [a,b,c="c"]=myArr;

console.log(a,b,c);//a undefined c


// example 5-Skip elements during destructuring

const myA=[1,3,6,8,7];

const [ ,,a1, ,b1]=myA;

console.log(a1,b1);//6 7


// Example 6- rest operator in array destructuring

const myNArr=[5,4,3,2,1];

const[a2,b2,...c2]=myNArr;// rest operator

console.log(a2,b2,c2);//5 4 (3) [3, 2, 1]

const d1=[...c2];// spread operator

console.log(d1);//(3) [3, 2, 1]

d1.push(8);

console.log(d1);//(4) [3, 2, 1, 8]

// Example 7-delete first element

let myAr=[4,5,6,9];

[ ,...myAr]=myAr;// here it will delete first element and shows other element usinmg rest operator

console.log(myAr);//(3) [5, 6, 9]


// Example 8-Swap values

let x=5 , y=10;

[y,x]=[x,y];// here the values are getting swapped using destructuring

console.log(x,y);//10 5


// Example 9- destructuring in Function

const myPosts=[
    ["post1",10],
    ["post2",20]
];

myPosts.forEach(([title,likes])=>
   console.log(`each ${title} has ${likes} likes`)// each post1 has 10 likes   each post2 has 20 likes

);


// Example 10: nested array destructuring

const myNestedArr=[1,2,[5,6]];

const[a,b,[c,d],e]=myNestedArr;

console.log(a,b,c,d,e);//1 2 5 6 undefined


// Challenge 6-Array destructuring

const processQuantities=([
    minQty,
    maxQty,
    defaultQty=0

])=>
{
    console.log(minQty);//10
    console.log(maxQty);//20
    console.log(defaultQty);0
    return maxQty-minQty;//10

};

const qtyRange=[10,20,0];

console.log(qtyRange); //(3) [10, 20, 0]  


// Challenge 6: Destructor result of the function

const minMax =(...nums)=>
{
      nums.reduce((min,num) => num <min ? num : min),

      nums.reduce((max,num) => num >max ? num : max)

};

let min,max;

[min,max] = minMax(1,15,85,20);

console.log(min,max);// 1 ,85  


// example 1- declartion and assignment using object destructuring

const myObject={
  a:10,
  b:true

};

const a= myObject.a;
const b=myObject.b;

const {a:a,b:b}=myObject;-// this is object destructuring

console.log(a,b);//10 true


// example 2- declartion and assignment using object destructuring and shorthand property names

const myObject1={
    a1:10,
    b1:true
  
  };
  
  const {a1,b1}=myObject1;-// shorthand property names
  
  console.log(a1,b1);//10 true

  
// example 3-assignment using object destructuring and shorthand property names

const myObject2={
    a2:10,
    b2:true
  
  };
  
  let a2,b2;

  ({a2,b2}=myObject2);-// shorthand property names using assignment
  
  console.log(a2,b2);//10 true


const anotherObject2={
   a3 : 20,
   b3: false

};

({a3,b3}=anotherObject2);

console.log(a3,b3);// 20 false


// Example 4-destructor non-object value

const {a4,b4}=undefined;

console.log(a4,b4);// Uncaught TypeError: Cannot destructure property 'a4' of 'null' as it is null.

const val=undefined;

const{a4,b4}=val || [];

console.log(a4,b4);//undefined undefined

const myArray2=[1,2,33];

const{c,d}=myArray2;

console.log(c,d);// undefined undefined

const{length,d2}=myArray2;// arrays are objects and length is the method of array.

console.log(length,d2);//3 undefined


// Example 5-Change order of the properties

const myObject3={
    a5:20,
    b5:false
};

const {b5,a5}=myObject3;

console.log(a5,b5);//20 false 

// Example 6-rest operator in object destructuring

const myObject4={
  a6:20,
  b6:true,
  c6:[],
  d6:"abc"
};

const {a6,b6,...rest}=myObject4;

console.log(a6,b6,rest);//20 true {c6: Array(0), d6: "abc"}

// Example 7-non existing properties

const myObject5={
    a7:20,
    b7:true,  
  };

  const{a7,b7,c7}=myObject5;

  console.log(a7,b7,c7);//20 true undefined

// Example 8-default values

const myObject6={
  a8:20,
  b8: true

};

const{a8,b8,c8="default value"}=myObject6;

console.log(a8,b8,c8);//20 true "default value"


// Example 9: default values and new variable names

const myObj={
    a9:10,
    b9:true
};

const{a9:newA,b9:newB,c9:newC="default value"}=myObj;

console.log(a9,b9);// error is shown as"Uncaught ReferenceError: a9 is not defined" because now new variables are newA and newB

console.log(newA,newB,newC);//10 true "default value" 


// Example 10: Nested object destructuring

const myObject7={
    a10:20,
    b10: true,
    nestedObject:
    {
        c10:5,
        d10:6,
        e10:"default value"
    }
};

const{
    a10:newA,
    b10:newB,
    nestedObject:{
        c10:newC,
        d10:newD,
        e10:newE
    }

}=myObject7;

console.log(newA,newB,newC,newD,newE);//20 true 5 6 "default value"



