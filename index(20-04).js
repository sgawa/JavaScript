// Challenge 6-Object Destrucuring

const personInfo=({
    name:name,
    age:personAge,
    location : {country:origin,city:homeCity},
    friendsQty=0,
    recordCreatedAt=new Date().getFullYear()})=>// {name:name,age:......} this is called as object destrucuring
    {
   name,
   personAge,
   origin,
   homeCity,
   friendsQty,
   recordCreatedAt
   };

const person=
{
    name:"Alice",
    age:19,
    location:{
       country:"England",
       city:"London"

    }
};
console.log(personInfo(person));

// Challenge 7- Object Destructuring and array helper methods

const posts=[
 {
   postId:234,
   author:"alex",
   commentsQty:5
 },
 {
    postId:452,
    author:"Ben",
    commentsQty:7
 }
];


const processPosts=posts =>{ return posts.map(({postId,author:postAuthor, commentsQty:postCommentsQty=0})=>
(
{
         postAuthor,
         postCommentsQty,
         postId :postId+1000

    
}));
}


console.log(processPosts(posts));//0: {postAuthor: "alex", postCommentsQty: 5, postId: 1234} 

// Challenge 8- Delete Object properties

let person={
    _id:"df4555",
    index:4,
    prcoessed:false,
    cart:["item1","item2","item3"],
    email:"abc@gmail.com",
    name:"John",
    cartId:125
};

{
    let _id,prcoessed,cart;

    ({_id,prcoessed,cart,...person}=person);
}

console.log(person);//{index: 4, email: "abc@gmail.com", name: "John", cartId: 125}



