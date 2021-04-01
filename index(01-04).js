/*// Example 4- "this" inside of the method of object

const myObject={
 name: "Ally",
 age:30,
 greeting: function()
 {
     console.log(this);//{name: "Ally", age: 30, greeting: ƒ}

 },

};

myObject.greeting();

//greeting();//Uncaught ReferenceError: greeting is not defined because "greeting" is the property not declared in the global scope.


// Example 1:CALL-method--custom "this"

const myObject1={
  a:10,
  b:true
};

function myFunction()
{
    console.log(this);//Window {window: Window, self: Window, document: document, name: "", location: Location, …}
}

myFunction();

myFunction.call(myObject1);//{a: 10, b: true}


// Example 2: "call" method and arguments
const myObject2={
  a:25,
  b: null

};

function myFunction(a,b)
{
    console.log(a+b);//35
    console.log(this);//{a: 25, b: null}
}

myFunction.call(myObject2,10,25);


// Example 3-CALL- call method of the object with other object as "this"

const person1={
  city:"New York",
  name: "Alice",
  info: function()
  {
      console.log(this);
      console.log(this.name +" " + "lives in" + " " + this.city);
  }

};

person1.info();//Alice lives in New York

const person2={
    city:"UK",
    name:"Diana",
};

person1.info.call(person2);//Diana lives in UK

// Example 1-Apply method

const myObject3={
  a:23,
  b: null
  
};

function myFunction1(a,b)
{
    console.log(a+b);//22
    console.log(this);//{a: 23, b: null}

}

myFunction1.apply(myObject3,[12,10]);

// Bind method

const myObject4={
    a:30,
    b: null
    
  };
  
  function myFunction1(a,b)
  {
      console.log(a+b);//22
      console.log(this);//{a: 23, b: null}
  
  }
  
  const customFunction1=myFunction1.bind(myObject3,12,10);// preset "this" and both the arguments

customFunction1();

const customFunction2=myFunction1.bind(myObject3); // preset only "this"

customFunction2(10,25);

const customFunction3= myFunction1.bind(myObject3,10);// preset "this" and "first" arguments.

customFunction3(10);//20-- and have pass remaining arguments.


// Pass By Value- If variable that holds value of primitive value type is passed to the function as argument ,it's value can't be changed inside of the function.

function myFunction2(parameterA)
{
    parameterA=20;
    return parameterA;
}

const a=10;

console.log(myFunction2(a));//20

console.log(a);//10 */


// Pass By Reference

const myArr=[1,2,3];// global scopped variable

console.log(myArr);//(3) [1, 2, 3]

function myFunction5(arr)// here we are passing reference "arr" to point to myArr. It takes the same memory as the array is stored in the memory.

{
    arr.push(4);
    console.log(arr);//(4) [1, 2, 3, 4]
    return arr;
}


myFunction5(myArr);

console.log(myArr);//(4) [1, 2, 3, 4]


// Challenge:

function addCustomGlobalMethod(globalObject)
{
    globalObject.customMethod = function()
    {
        console.log("Greetings from the custom method");
    };
}

addCustomGlobalMethod(this);

this.customMethod();//Greetings from the custom method"

customMethod();//Greetings from the custom method"


// Challenge:

function waitingFn(timeInMs)
{
    while (Date.now);

    return timeInMs;

}

waitingFn(3000);

console.log("Function call has just ended");


