// Default function parameters

const multiplier=(num,mult=2)=>
{
    console.log(num,mult);//10 3
    return num*mult;
};

console.log(multiplier(10,3));//30

console.log(multiplier(7));// 14-here num=7 and mult=2

console.log(multiplier());//NaN--here num will be initialised as "undefined" and mult=2.

// Example 2:

const groceryItem=(
  title,
  qty,
  item={
   groceryItem:title,
   groceryItem:qty,
   groceryItem: price //Uncaught ReferenceError: Cannot access 'price' before initialization
  },
  price
)=>
{
    console.log(title,qty,item);// banana 5 {groceryItem: 5}
};

groceryItem("banana",5); 


// Example 3:

const warning=(title)=>
{
 console.log(
     title!== undefined ? `Title of the button is ${title}.but color is not set` : 
     `Title and color of the button is not set`
 );

 throw new Error ("btn functions must be called with two paramters- title and color");

};

const btn=(title =warning(),color=warning (title))=>
{
    console.log(title);
};

btn("Button 1","grey");
btn();

// Challenge 5- Default value without default parameters-without default function parameter

const weatherForecast=(city,weather)=>
{
    //weather=weather || "Great Weather";
    //return `Weather forecast for ${city} : ${weather}`;

    weather=weather!=undefined ?  weather :
     return `Weather forecast for ${city} : ${weather}`;
};
console.log(weatherForecast("America","Heavy Rain"));//Weather forecast for America : Heavy Rain

console.log(weatherForecast("New York","Light rain"));//Weather forecast for New York : Light rain

console.log(weatherForecast("Japan"));//Weather forecast for Japan : Great Weather

console.log(weatherForecast("China",0)); //Weather forecast for China : Great Weather 


// Challenge 5- With default function parameter

const weatherForecast=(city,weather="Great Weather!")=>
 `Weather forecast for ${city} : ${weather}`;

console.log(weatherForecast("America","Heavy Rain"));//Weather forecast for America : Heavy Rain

console.log(weatherForecast("New York","Light rain"));//Weather forecast for New York : Light rain

console.log(weatherForecast("Japan"));//Weather forecast for Japan : Great Weather

console.log(weatherForecast("China",0)); //Weather forecast for China : 0

// Challenge 5-Generate Missing unique Ids

console.log(Math.random());// 0<=number <1-0.12275702097810437

console.log(Math.random()*10000);//0.12275702097810437 

console.log(Math.floor(Math.random()*10000));// 9491-without decimal places

console.log(1000+Math.floor(Math.random()*9000));//1546

// Challenge 5-Solution part 2

const geneateTaskIds = tasks =>
{
    return tasks;
};

const tasksSortedByIds=(tasks,tasksWithIds=geneateTaskIds(tasks))=>
{
    return tasksWithIds;
};

const tasks=[
    {title:"Meeting with John", taskId:4562},
    {title:"Visit gym", taskId:4510},
    {title:"Buy new phone"},
    {title:"Plan a trip", taskId:1211}
   
   ];

console.log(tasksSortedByIds(tasks)); 


// Object Literal

let myObject={
    prop1 :10,
    prop2: true,
    prop3 :function()
    {
        console.log(this.prop1,this.prop2);//{prop1: 10, prop2: true, prop3: ƒ}
    }

};

// Enhanced Object Literals
// Example 1-shorthand property names-

const num=10;
const str="Hello World";
const bool=true;

const myObject1={

    num,
    str,
    bool,
    arr //Uncaught ReferenceError: arr is not defined
};


// Example 2-shorthand method names

const myCar=(make,year)=>
{
    return
    {
        make,
        year,
        info(price)
        {
            return `${this.make} costs ${price}$`;
        }
    };

};

const newCar=myCar("Tesla",2020);

console.log(newCar.info(50000));
