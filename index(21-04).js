// Example 1:

function civilPlane() {}

console.log(civilPlane.prototype);//{constructor: ƒ}

console.log(civilPlane.prototype.constructor===civilPlane);// true

console.log(civilPlane.prototype.__proto__===Object.prototype);// true

console.log(civilPlane.prototype.__proto__.__proto__===null);// true

// Example 2:

function civilPlane(props){
 this.numberOfSeats=props.numberOfSeats;

}

const propsForSmallPlane={numberOfSeats:4};

const smallPlane=new civilPlane(propsForSmallPlane);

console.log(smallPlane);//civilPlane {numberOfSeats: 4}

console.log(smallPlane.__proto__===civilPlane.prototype);// true 

// Example 3-Function Constructor
// Create new instance of the prototype using "new" syntax:
/*.Function constructor is Called.
2.New object {} is created.
3.__proto__ is added.
4.New props are added.
5.object is returned by constructor object. */

function civilPlane(props)
{
    console.log(this);//civilPlane {}
    console.log(this.__proto__);//{constructor: ƒ}
    this.numberOfSeats=props.numberOfSeats;
    console.log(this);//civilPlane {numberOfSeats: 4}

} 

// Example 4- Method is added to the prototype

function civilPlane(props){
    this.numberOfSeats=props.numberOfSeats;
   
   }
   civilPlane.prototype.seatsInfo=function()
   {
       console.log(`Number of the seats in the plane is ${this.numberOfSeats}`);//Number of the seats in the plane is 10
   };

   const propsForSmallPlane={numberOfSeats:4};
   
   const smallPlane=new civilPlane(propsForSmallPlane);
   
   console.log(smallPlane);//civilPlane {numberOfSeats: 4}
   
   console.log(smallPlane.__proto__===civilPlane.prototype);// true 


   civilPlane.prototype.modifySeatNumber=function(newSeatsQty)
   {
       this.numberOfSeats=newSeatsQty;
   }

   smallPlane.modifySeatNumber(10);

   smallPlane.seatsInfo();


   // Object.create()

   const Parent={
       type:"Parent",
       typeInfo: function()
       {
           console.log(`Hello from ${this.type}`);//Hello from Parent

       },

       modifyType: function(newType)
       {
           this.type=newType;
       }
   };

   console.log(Parent);//{type: "Parent", typeInfo: ƒ}

   console.log(Parent.type);// Parent

   Parent.typeInfo();//Hello from Parent

   console.log(Parent.prototype);// undefined

  const child=Object.create(Parent);

  console.log(child.__proto__===Parent);// true

  child.type="Child";

  child.typeInfo();//Hello from Child

  child.modifyType("Modified child");

  console.log(child.type);//Modified child

  child.typeInfo();//Hello from Modified child 

// example 5-prototype chain
// CivilPlane.prototype->Airlane.prototype-> Object.prototype

function AirPlane(props)
{
    this.wingspan=props.wingspan;
    this.maxRangeOfFlight=props.maxRangeOfFlight;
}


AirPlane.prototype.airPlaneInfo=function(){
    console.log(`Wingspan of the airplan is ${this.wingspan} and maximal range of flight is
    
    ${this.maxRangeOfFlight}`);

};


function civilPlane(props)
{
    AirPlane.call(this,props);
    this.numberOfSeats=props.numberOfSeats;
   
 }
   
 civilPlane.prototype=Object.create(AirPlane.prototype);

 civilPlane.prototype.constructor=civilPlane;

   const propsForSmallPlane={
       numberOfSeats:4,
       wingspan:20,
       maxRangeOfFlight:1000

    };
   
   const smallPlane=new civilPlane(propsForSmallPlane);
   
   console.log(smallPlane);//civilPlane {wingspan: 20, maxRangeOfFlight: 1000, numberOfSeats: 4}
   
   console.log(smallPlane.__proto__===civilPlane.prototype);// true  




