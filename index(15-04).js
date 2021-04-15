// Pre-ES6-Template Strings

const myNumber=10;
const myStr="abc";
const myBool=true;
const myArr=[1,2];
const myObj={x:10};

const myGreeting=name=> "hello " + name;

const templateStr= "Number is " + myNumber + "and string is "+ myStr + "and boolean is "+ myBool + 
"and my array is "+ myArr + " and my object is " + myObj + " and the result of the function call is "+ myGreeting("Alice");

console.log(templateStr);

// ES6- Template Literals

const templateLiterals= `Number is  ${myNumber} and string is  ${myStr} and boolean is ${myBool} 
and my array is  ${myArr}  and my object is ${myObj} and the result of the function call is ${myGreeting("Alice")};`

console.log(templateLiterals);


const btn1 ="Button 1";
const btn2 ="Button 2";

const myButtons= `
 <div>
  <button>$(btn1}</button>
  <button>$(btn2}</button>
 </div>
`;

document.body.innerHTML= myButtons; 

// Tagged Template

const name="Sophia";
const age=20;

const checkAge=(arrayOfStrings,name,age)=>
{
    console.log(arrayOfStrings,name,age);// (3) ["", " is ", " years old ", raw: Array(3)]0: ""1: " is "2: " years old "length: 3raw: (3) ["", " is ", " years old "]__proto__: Array(0) "Sophia" 20

    return age >=18 ? `${name} is adult` : `${name} is underage `;
};

console.log(checkAge `${name} is ${age} years old `);//Sophia is adult  

// Challenge 1-Template Literals

const templateLiteral= num=>`Number is ${num}
 This number is ${
   num>=10 ? "greater or equal" : "less"
} than 10.
Square root of this number is ${Math.sqrt(num)}`;

const myNumber=9;

console.log(templateLiteral(myNumber));// Number is 9  This number is less than 10. Square root of this number is 3


const myNumber1=25;

console.log(templateLiteral(myNumber1));


// Rest Parameters-

const sumNumbers=(a,b,...nums) =>
{
    console.log(nums); //(2) [3, 4]
}

sumNumbers(1,2,3,4); 


// Example 1-using Rest Parameters

const sumNumbers=(...nums)=>
{
    console.log(nums);
    return nums
      .filter(num => typeof num =="number")
      .reduce((sum,num) =>sum+num, 0);
};

console.log(sumNumbers("x",2,3,4));//10 

// Example 1-Spread Operator -function call

const myGreeting=(name,city,age)=>
{
    return `Hello from ${name}  who is ${age} years old lives in ${city}`;
}

const myPersons=["alice","New York",30];

console.log(myGreeting(...myPersons));//Hello from alice  who is 30 years old lives in New York

const myAnotherPersons=["Mary","Boston",40];

console.log(myGreeting(...myAnotherPersons));//Hello from Mary  who is 40 years old lives in Boston

const myAnotherPersons=["Boston",40];

console.log(myGreeting(...myAnotherPersons))//Hello from Boston  who is undefined years old lives in 40 

// Example 2-concatenate arrays

const a=[1,3,6];

const b=[10,5];

const c=a.concat(b);

console.log(c);//(5) [1, 3, 6, 10, 5]

const c1=a.concat(b).concat(8);

console.log(c1);//(6) [1, 3, 6, 10, 5, 8]

const c2=[...a,...b,9];

console.log(c2);//(6) [1, 3, 6, 10, 5, 9]

// Example 3-Create date

const dateInfo=[2022,4,25];

const myDate=new Date(...dateInfo);

console.log(myDate);//Wed May 25 2022 00:00:00 GMT+0530 (India Standard Time)


// Example 4-copy array

const myArray=[10,[],"abc",true];

const newArray=[...myArray];

newArray.push(12);

//console.log(newArray);//(4) [10, Array(0), "abc", true]

//console.log(newArray);//(5) [10, Array(0), "abc", true, 12]

newArray[1].push(8);

console.log(newArray);//(5) [10, Array(1), "abc", true, 12]


// Example 5- copy object

const myObj1={a:10,b:"abc",c:[5,2]};

const copiedObject={...myObj1};

//console.log(copiedObject);//{a: 10, b: "abc"}

copiedObject.a=20;

//console.log(copiedObject);//{a: 20, b: "abc"}

copiedObject.c.pop();

console.log(copiedObject);//{a: 20, b: "abc", c: Array(1)}

console.log(myObj1);//{a: 10, b: "abc", c: Array(1)}

// Example 6-spread string

const myStr="Hello World";

const myStringNew=[...myStr];

console.log(myStringNew);//(11) ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]


// Challenge 1- rest and spread operator

const scores1=[0,1.5,2.5,3.7];

const scores2=[1.4,1.9,2.8,0,5.9,3.6];

const scores3=[1.8,3.2,2.3];

const scores4=["abc",1.2,true,2.6,2.1];

const meanScore=(...scores)=>
{
  if(scores.every(score=> typeof score==="number"))
  {
      return parseFloat(
       scores.reduce((avg,score)=>
       {
           return avg + score/scores.length;
       } ,0).toFixed(2)

      );
}
else

{
    throw new Error ("Supplied arguments must contain only numbers!");
}

};

console.log(meanScore(...scores1));//1.93

console.log(meanScore(...scores1,...scores2));//2.33

console.log(meanScore(...scores1,...scores2,...scores3));//2.35

console.log(meanScore(...scores4));//Supplied arguments must contain only numbers!

