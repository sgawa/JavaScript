<<<<<<< HEAD
var a;

console.log(a);//undefined

console.log(b);//index.js:5 Uncaught ReferenceError: b is not defined at index.js:5
let c;

console.log(c);

const d;

console.log(d);//Uncaught SyntaxError: Missing initializer in const declaration 


//Example 2-Let

let myNumber1=10;

console.log(myNumber1);
declaration
let myString;

console.log(myString);
assignment
myString ='Hello String';

console.log(myString);
re assignment
myString="New value of String";

console.log(myString);




//Example 3-Var

var myNumber1=10;

console.log(myNumber1);
//declaration
var myString;

console.log(myString);
//assignment
myString ='Hello String';

console.log(myString);
//re assignment
myString="New value of String";

console.log(myString);


Example-Const

const myBoolean=true;
console.log(myBoolean);//true

myBoolean=false;
console.log(myBoolean);//Uncaught TypeError: Assignment to constant variable at index.js:59

const myBoolean=false;//Uncaught SyntaxError: Identifier 'myBoolean' has already been declared


//Challenge 1

const myObject={};
console.log(myObject);

myObject={};//Uncaught TypeError: Assignment to constant variable.at index.js:70

const myObject={};//Uncaught SyntaxError: Identifier 'myObject' has already been declared 


//Challenge 2

let x=10;
const y=true;

const myObject ={a:x,b:y};

console.log(myObject);

 x=20;

let anotherObject={newA:x,b:y,c:myObject};

console.log(anotherObject);


let a=10;
a=true;

a="string";
a=null;

console.log(a);



myVariable=10;

console.log(myVariable);

myVariable=true;

console.log(myVariable);

myVariable={x:10,y: true};

console.log(myVariable);


//Challenge 3:
let myNewVariable;
let x=true;
let y=10;

myNewvariable ={x:true,y:10};

console.log(myNewVariable);

myNewvariable.y=20;

console.log(myNewVariable);

myNewVariable=null;

console.log(myNewVariable);

myNewvariable.x=false;

console.log(myNewvariable);



//Modify a object

const myCity={ city: "Mumbai",
              popular : true,
			  country:"USA"
			  };
			  

console.log(myCity.city)//Mumbai

console.log(myCity.country);// USA.

//We can modify the properties of object also using:

myCity.city="New York";

console.log(myCity);

//Adding new properties

const myCity1={city: "USA"};

console.log(myCity1);

myCity1.popular=false;

console.log(myCity1);

myCity1.country="AUS";

console.log(myCity1);//{city: "USA", popular: false, country: "AUS"}

//Deleting properties

const myCity2={city:"Berlin",popular: true};

delete myCity2.popular;

console.log(myCity2);//{city: "Berlin"}


//Access properties using bracket annotation []

const myCity3={city:"USA"}

myCity3["popular"]=true;

console.log(myCity3);//{city: "USA", popular: true}


const countryPropertyName="country";

myCity3["country"]="USA";

console.log(myCity3);//{city: "USA", popular: true, country: "USA"}

//Nested properties

const myCity4={city: "USA",
               info :{ popular: false,
                country:"New York"

               }

};

console.log(myCity4.city);//USA

console.log(myCity4.info.country);// New York

delete myCity4.info["popular"];

console.log(myCity4);//city: "USA" ,info: {country: "New York"}*/


const myCity5={city: "USA",
               info :{ popular: false,
                country:"New York" ,
                populationCount :
                {
                    population :"High"

                }
            
            
            }

};

myCity5.info.populationCount.population;

console.log(myCity5);//info: {popular: false, country: "New York", populationCount: {…}}

myCity5.city;

console.log(myCity5);

myCity5.info.populationCount.population;

console.log(myCity5);//info: {popular: false, country: "New York", populationCount: {…}}

delete myCity5.populationCount.population;

console.log(myCity5);*/


//Create object and modify its properties:

let myObject;

myObject={a :10,
          b :"abc"

};

console.log(myObject);

myObject.a=20;

console.log(myObject);

myObject.c=true;

console.log(myObject);//{a: 20, b: "abc", c: true}

delete myObject ["b"];

console.log(myObject);//{a: 20, c: true}

console.log(myObject.a);//20*/

//Challenege 1

let myPost;

myPost={};

console.log(myPost);

myPost.postTitle="Object is reference Type";

console.log(myPost);

myPost.postLikes=0;

console.log(myPost);

myPost.shared=false;

console.log(myPost);

myPost.postLikes=myPost.postLikes+1;

console.log(myPost);

delete myPost.shared;

console.log(myPost);*/

//Example 2

const myObject={};

myObject.a=true;// No error

console.log(myObject);

myObject={
a: true
}

console.log(myObject);//index.js:306 Uncaught TypeError: Assignment to constant variable.*/

//Challenge 2:

 let myObject={a :10};

let copyOfMyObject;

copyOfMyObject=myObject;

copyOfMyObject.b=false;

console.log(myObject);//{a: 10, b: false}

console.log(copyOfMyObject);//{a: 10, b: false} output is same because object is a refrence type and it is pointing to the values.*/


//Example 3 using bracket annotation:

let myObject={ a: true,
    b: null,
    c: 25
};

console.log(myObject["a"]);// true

console.log(myObject[a]);//index.js:335 Uncaught ReferenceError: a is not defined

console.log(myObject["b"]);// null

const propertyName='c';

console.log(myObject[propertyName]);//25

console.log(myObject["propertyName"]);// undefined ouput-because "propertyName" is not defined previously.

myObject["New" + "Property"+ "Name"]="value for dynamically computed property name";// here string is concatenated to form a one single string.

console.log(myObject);//{a: true, b: null, c: 25, NewPropertyName: "value for dynamically computed property name"}*/

//Example 4--Missing Properties

const myObject={a:3,b:true};

console.log(myObject.c);

myObject.newPropertyDefinedwithUndefinedVariable="Undefined";

console.log(myObject);

console.log(myObject.newPropertyDefinedwithUndefinedVariable);//a: 3, b: true, newPropertyDefinedwithUndefinedVariable: "Undefined"}*/


//Challenge 3:

let objectWithNestedObject ={};

objectWithNestedObject.nestedObject={};

objectWithNestedObject.nestedObject.a=null;

const propertyName="b";

objectWithNestedObject.nestedObject[propertyName]=true;

console.log (objectWithNestedObject);//nestedObject: {a: null, b: true}


//Function eg;

let a=3;
let b=5;

function sum(a,b)
{
    let c=a+b;
    console.log(c);
}

sum(a,b);

a=10;
b=20;
sum(a,b);

//Syntax of Function

function myFun(a,b)
{
    let c;
    a=a+1;
    c=a+b;
    return c;
}

myFun(10,20);

console.log(myFun);



































