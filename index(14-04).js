// reduce function-Example 1-Sum numbers

const myNumbers=[5,12,13,10];

const sum=arrayOfNumbers=>arrayOfNumbers.reduce((accumulator,number)=>
{
          console.log("Accumulator is "+ accumulator + " number is "+ number );

return (accumulator + number);
},0);

console.log(sum(myNumbers)); //Accumulator is 0 number is 5 Accumulator is 5 number is 12   Accumulator is 17 number is 13  Accumulator is 30 number is 10


// Example 2-reduce array of object to single array

const persons=[
       {
           name:"Veronica",
           age:25

       },
       {
           name:"John",
           age:30
       },
       {
           name:"Mike",
           age:22

       }
];

const personsNames=arrayOfPersons=> arrayOfPersons.reduce ((names,person) =>
  {
    names.push(person.name);
      return names;
  }, [] );



console.log(personsNames(persons));//(3) ["Veronica", "John", "Mike"]

// Example 3-remove duplicates

const fruits=[
  "banana",
  "Orange",
  "Orange",
  "Apple",
  "Grapes",
   "Grapes"
];

const duplicateFruits=arrayOfFruits=>arrayOfFruits.reduce((uniqueElement,fruit)=>

{
    if(!uniqueElement.includes(fruit))
     uniqueElement.push(fruit);

     return uniqueElement;

}, []);

console.log(duplicateFruits(fruits));//4) ["banana", "Orange", "Apple", "Grapes"]


//Challenge 3-Reduce array of objects

const posts=[
  {
      title:"JavaScript",
      postId:3211,
      comments:15
  },

  {
    title:"ES6",
    postId:4211,
    comments:3
  },
 
  {
    title:"Java",
    postId:6522,
    comments:13
  },
   
];

const minimalCommentsQty=10;

const popularPostsIds=(posts,minimalCommentsQty)=> posts.reduce((postIds,post)=>
{
   if( post.comments>=minimalCommentsQty)
      postIds.push(post.postId);

    return postIds;

},[]);

console.log(popularPostsIds(posts,minimalCommentsQty));// (2) [3211, 6522]

// Challenge 4-reduce array of Objects to Object

const products=[
    {
      title:"Phone Case",
      quantity:3,
      price:23,
      category:"Accessories"
    },

    {
        title:"Android Phone",
        quantity:2,
        price:123,
        category:"Phones"
      },

      {
        title:"Headphones",
        quantity:1,
        price:30,
        category:"Accessories"
      }
];


const quantityByCategories=products=>
 products.reduce((counts,product)=>
 {
   counts[product.category]=(counts[product.category] || 0)+ product.quantity;

   return counts;

 },{});

console.log(quantityByCategories(products)); */

// sort() method-sorting algorithm

const myNumbers=[5,10,7,12,30];

 //console.log(myNumbers.sort((a,b)=> a-b));

let i=0;

console.log(
   myNumbers.sort((a,b)=>
     {
         console.log(a,b);
         i++;
        return a-b;
     } )

);

console.log("Qty of iterations is  "+ i); 

// Challenge 3- sort()array of objects

const products=[
    {
      title:"Phone Case",
      quantity:2,
      price:23,
      category:"Accessories"
    },

    {
        title:"Android Phone",
        quantity:1,
        price:123,
        category:"Phones"
      },

      {
        title:"Headphones",
        quantity:1,
        price:35,
        category:"Accessories"
      },

      {
        title:"Sports Watch",
        quantity:2,
        price:30,
        category:"Watches"
      }
];

const sortProductByPrice=(products)=>(products.sort((a,b)=>a.price-b.price));

console.log(sortProductByPrice(products));// output is sorted using price. 

// Challenge-sort () long array of objects

const persons=[
  {
      name:"Alice",
      friendsQty:4,
      index:1
  },
  
  {
    name:"Mary",
    friendsQty:10,
    index:2
 },

 {
    name:"John",
    friendsQty:3,
    index:3
 },


  {
    name:"Marbel",
    friendsQty:5,
    index:4
  },


  {
    name:"ALexa",
    friendsQty:9,
    index:5
  },

  {
    name:"Yohna",
    friendsQty:18,
    index:6
  }

];

const sortPersonsByFriendsQty=persons=>{
    
let it=0;
persons.sort((a,b)=>
{
    it++;
    return a.friendsQty-b.friendsQty;

});

//console.log("Qty of iterations is "+ it);

return persons;
};

console.log(sortPersonsByFriendsQty(persons));//(6) [{…}, {…}, {…}, {…}, {…}, {…}] 0: {name: "John", friendsQty: 3, index: 3}



