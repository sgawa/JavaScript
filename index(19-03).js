// AND Operator &&

console.log(true && false);//false

console.log(false && true);//false

console.log("abc" && 10 && false && "" && "abcd");//false

console.log("abc" && 10 && NaN  && "" && "abcd");//NAN

console.log("abc" && 10 && "" && "" && "abcd");//"" empty string

// Eg -all operands are "truthy"

console.log(true && true);// true
console.log("abc" && 10 && true && "abcd");//abcd

//Not operator

console.log(!"abc");//false
console.log(!"");//true
console.log(!0)// true

let myVariable;

myVariable=undefined;

console.log(!myVariable);//true

myVariable="ABC";

console.log(!myVariable);// false

// Quick truthy/falsy check

myVariable=null;

console.log(!!myVariable);//false

myVariable=10;

console.log(!!myVariable);//true

//Operator Precedence

console.log(2+4*10);//42

console.log((2+2)*4);//16

let a=1;

a=a+1;

console.log(a);//2 First "+" operand will be executed and then "=" operand.

//Operator Associativity

let a1,b1;
b1=3;

a1=b1=5;// right to left

console.log(a1,b1);// 5 5 

console.log(4+6+3);//13 left-to -right

console.log(5*10/5);//10

console.log(2*2/2/3);//0.6666 left to right

//Challenge 1

let myvariable1,myVariable2;

myVariable1="10";

myVariable2=100;

console.log(+myVariable1<=+myVariable2);// true unary operator "+" is used to convert string to number.

//Challenge 2

let myNumber1=10;
let myNumber2=3;

console.log(myNumber1%myNumber2);//1

console.log(25%10);//5

console.log(100%30%3)//1 left to right


//function statement

function myFn(a)
{
    console.log(a);
}

let b=true;
let c=10;

myFn(2+3);//5

myFn(b)// true;

myFn(c=c+1);//11

myFn(let d); // error










