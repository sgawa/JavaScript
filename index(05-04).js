
// Challenge:
// events and Events queue

function waitingFn(timeInMs)
{
    const futureTime=Date.now()+timeInMs;
    while (futureTime>Date.now()){

        /// Waiting

    }

}

waitingFn(5000);

//console.log("Function call has just ended"); 


setTimeout(()=>console.log("callback is executed"),2000);

console.log("last statement in the global execution context"); 

// Challenge 2: Callbacks,events,events queue,execution context stack,web APIs

function waitingFn(timeInMs)
{
    const futureTime=Date.now()+timeInMs;
    while (futureTime>Date.now()){

        /// Waiting........

    }

}

//console.log("Function call has just ended"); 

setTimeout(()=> console.log("callback is executed"),0);

waitingFn(5000);

console.log("last statement in the global execution context"); 


// Closure

function outerFn(mult)
{
    const a=10;


function innerFn(b)
{
    console.dir(innerFn);
    return (a+b)* mult;

}
return innerFn;
}

const res1= outerFn(2);
console.log(res1(20));//60

const res2=outerFn(3);
console.log(res2(20));//90 


// Redelcaration

var d1=false;
 var d1=true;

function myFn1()
{
    var d1=5;
}

myFn1();// it will print true as o/p  because d1=true is globally declared

