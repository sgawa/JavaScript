// Challenge 3-4:

   const a=[5,"abc",10,1];
   const b=[4,10,14,25,25,50];
   const c=[150,132,80,40];
   const d=[15,26,10,23,85]


// If at least one element in the array is not a number
const arrayCheck= (inputArray)=>{
  if(inputArray.some(element=> typeof element !=='number'))
  {
      return "some elements are not numbers";
  }

}

console.log(arrayCheck(a));//some elements are not numbers 

// If numbers in the area are sorted in ascending order

const arrayCheck1=(inputArray)=>{
    if(inputArray.every(
    (element,index,array)=>
   index >0 ? element >=array[index-1] 
   : true
 )
 )
{
    return("Array is sorted in ascending order");
}

}
console.log(arrayCheck1(b));

// If numbers in the area are sorted in descending order

const arrayCheck2=(inputArray)=>{
    if(inputArray.every(
    (element,index,array)=>
   index >0 ? element <=array[index-1] 
   : true
 )
 )
{
    return("Array is sorted in descending order");
}
return "Array is not sorted";

}
console.log(arrayCheck2(d)); 

// Challenge 

const a=[1,10,5];
const b=[1,10,5];

const c=[12,10,15];
const d=[8,45,4,6];

const ArraysAreEqual=(arrayOne,arrayTwo)=>arrayOne.length==arrayTwo.length && 
             arrayOne.every((element,index)=> element==arrayTwo[index]);   

console.log(ArraysAreEqual(a,b));// true

console.log(ArraysAreEqual(c,d));// false

console.log(ArraysAreEqual(a,d)); // false


// Challenge 3

const transport=["Bus","car","Airplane","Bicycle"];
const elementFound=(inputArray,searchElement)=>
                   inputArray.some(element=>element === searchElement);

console.log(elementFound(transport,"Bus"));// true

console.log(elementFound(transport,"Bike"));// false





                