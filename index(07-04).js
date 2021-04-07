// Let Lifecycle:

function fn(){

let a; // variable a is initilaised with "undefined"
console.log(a);// undefined

let a1=10;// variable a initiliased with value as 10

console.log(a1);//10

}

fn();

console.log(a);//Uncaught ReferenceError: a is not defined


// Const lifecycle

const a3=10;

console.log(a3);//10

function fn1()
{
    const b2=20;
    console.log(b2);//20
}

fn1();

console.log(b2);//Uncaught ReferenceError: b2 is not defined-- because it is limited to the function scope only

// Function lifecycle:

smile();

function smile()
{
    console.log("Smile here.......");// Smile Here two times
}

smile();

// Variable Lifecycle-Challenge 1

let b;  

// Function declaration:

function fn4(a,b)
{
    return a+b;
}

fn4(2,8);


// Anonymous function expression
// Assignment to the variable

const fn5=function(a,b){
    return a+b;
}

fn5(5,1);

// Callback function

setTimeout(function(a,b)
{
    console.log("callback function is executed");//callback function is executed
    return a+b;
},1000);

// Arrow Functions- Example 1

console.log(sum(5,9));//Uncaught ReferenceError: Cannot access 'sum' before initialization

const sum=(a,b)=>a+b;

console.log(sum(1,8));//9
console.log(sum(4,5));//9 */

// Example-2

const post={
 title: "Sample Title",
 comments:10,
 shared:true,
 published:true,
 postId:1234
}


const processedPost=(post)=>{
  return{
    title:post.title,
    comments:post.comments,
    shared:post.shared,
    postPopular:post.comments <3 ? true: false,// explicit called function
  }
 
};

console.log(processedPost(post));//{title: "Sample Title", comments: 10, shared: true, postPopular: false}

const processedPost=(post)=>({
  
    title:post.title,
    comments:post.comments,
    shared:post.shared,
    postPopular:post.comments <3 ? true: false,// implicit called function

 
});

console.log(processedPost(post));//{title: "Sample Title", comments: 10, shared: true, postPopular: false}

// Example-3

(()=>{
   this.greet=() =>" Hey,what's up?";
   console.log(this);//() =>" Hey,what's up?"
   return this;
}

)();


// Arrow functions and "this"

const num={
  value:200,
  info:function info()
  {
      console.log(this);//{value: 200, info: ƒ}
      return this.value;
  }
};

console.log(num.info());// 200 */


const num={
    value:200,
    info:()=>
    {
        console.log(this);// window object
        return this.value;
    }
  };
  
  console.log(num.info());// undefined

  // example 2-Function constructor

  function groceryItem(title,kind)
  {
      this.title=title;
      this.kind=kind;
  }

  const apple=new groceryItem("Apple","fruit");
  console.log(apple);//groceryItem {title: "Apple", kind: "fruit"}

  const cabage=new groceryItem("Cabage","vegetable");
  console.log(cabage);//groceryItem {title: "Cabage", kind: "vegetable"} 

  // Challenge 1:

  const createButton =()=>
  {
      const btn=document.createElement("button");

      let qty=0;

      btn.innerHTML="Click Me";

      btn.onclick=function()
      {
          console.log("Button was clicked");
          btn.innerHTML="Button was clicked "+  ++qty+  " times";


      };

    document.body.appendChild(btn);

  };

  createButton();


