//Arithemetic Operators:
//Unary '+' operator
c="1";

console.log(c);//1

console.log(+c);//1

c=undefined;

console.log(+c);//NAN

//Unary minus operator 

c=15;

console.log(-c);//-15

console.log(--c);//14

console.log(c--);//14

c="abc";

console.log(c);//abc

console.log(-c);//NAN

//++ operator

let d=7;

//in the case of ++d operator first increments the value of operand and then return value of operand.
console.log(++d);//8

//in the case of d++ operator first it will return the value of operand and then increments the value.
console.log(d++);//8

console.log(d++);//9


let d1="abcd";

console.log(++d1);//NAN

console.log(d1++);//NAN

console.log(--d);//9

console.log(d--);//9

console.log(d);//8

console.log(d--);//8

//Compariosn Operator-comparison of numbers

let a=10;
b=20;
c=10;

console.log(a>b);// false

console.log(a<b);// true

console.log(a<=c);// true

//Comparison Operatos-comparison of strings

let a1="abc";
b1="pqr";

c1="ABC";

console.log(a1<b1);// true

console.log(a1>b1);//false

console.log(a1<c1);//false

console.log(a1>c1);// true

//Equality Operator

let mystring="0";
let myNumber=0;
let myBoolean=false;

console.log(mystring==myNumber);// true

console.log(myNumber==myBoolean);//true

console.log(mystring==myBoolean);//true

//Strict Equality

console.log(mystring===myNumber);//false

console.log(myNumber===myBoolean);//false

console.log(mystring===myBoolean);//false


// Strict Inequality

console.log(mystring!==myNumber);// true

console.log(mystring!=myNumber);//false

//Logical Operators

let city;

const defaultCity="New York";

console.log(city || defaultCity);

let myCity;

myCity="Los Angles";

console.log(myCity || defaultCity);//Lod Angles

let myOtherCity =city || console.log("Fill in city please...") || defaultCity;

console.log(myOtherCity);//Fill in city please... New York






























