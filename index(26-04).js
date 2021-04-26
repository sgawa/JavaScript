// Challenge 1:

class ExtendedArray extends Array
{
  sum()
  {
      return this.reduce((sum,el)=> sum + el);

  }

  onlyNumbers()

  {
      return this.filter(el=>typeof el==="number");
  }

}

const firstInstance=new ExtendedArray(2,3,4,5);

console.log(firstInstance.sum());//14

console.log(firstInstance.onlyNumbers());//ExtendedArray(4) [2, 3, 4, 5]

firstInstance.push("abc");

console.log(firstInstance);//ExtendedArray(5) [2, 3, 4, 5, "abc"]

console.log(firstInstance.onlyNumbers());//ExtendedArray(4) [2, 3, 4, 5]

console.log(firstInstance instanceof Array);// true

console.log(firstInstance instanceof ExtendedArray);// true

console.log(firstInstance instanceof Object);// true

console.log(firstInstance.__proto__===ExtendedArray.prototype );// true  

// Challenge 2:

class CustomArray extends Array
{
  customPush(newElement)
  {
    console.log(`Initial lenght is ${this.length}`);//Initial lenght is 0

    this[this.length]=newElement;

    console.log(`Updated lenght is ${this.length}`);

    console.log(`New element ${newElement} was just added to the array`);//Updated lenght is 1

  }
}// length property is updated automatically

const firstInstance= new CustomArray();
firstInstance.customPush(1);

console.log(firstInstance);//New element 1 was just added to the array [1]






