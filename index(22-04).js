//Challenge-Insert prototype into existing prototype chain

function vehicle(props)
{
    this.maxSpeed=props.maxSpeed;
    this.weight=props.weight;
}

vehicle.prototype.vehicleInfo=function()
{
    console.log(`Max speed of the vehicle is ${this.maxSpeed} and weight is  ${this.weight}`);
}

AirPlane.prototype=Object.create(vehicle.prototype);// this statement will create function of vehicle 

AirPlane.prototype.constructor=AirPlane;// and this statement is used to create constructor 

function AirPlane(props)
{
    vehicle.call(this,props);// to call the properties present in the vehicle function 
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
       maxRangeOfFlight:1000,
       maxSpeed:600,
       weight: 30

    };
   
   const smallPlane=new civilPlane(propsForSmallPlane);

   const propsForLargePlane={

       numberOfSeats:250,
       wingspan:60,
       maxRangeOfFlight:3500,
       maxSpeed:900,
       weight:40

   };

   const largePlane=new civilPlane(propsForLargePlane);
   
   console.log(smallPlane);//civilPlane {wingspan: 20, maxRangeOfFlight: 1000, numberOfSeats: 4}
   
   console.log(smallPlane.__proto__===civilPlane.prototype);// true  

   smallPlane.vehicleInfo();//civilPlane {maxSpeed: 600, weight: 30, wingspan: 20, maxRangeOfFlight: 1000, numberOfSeats: 4}

   largePlane.vehicleInfo();//civilPlane {maxSpeed: 900, weight: 40, wingspan: 60, maxRangeOfFlight: 3500, numberOfSeats: 250}


 // Es6 classes- class declaration and instance of the class

 class myClass{}

 const firstInstance=new myClass();

 console.log(firstInstance);//myClass {}

console.log(firstInstance.__proto__===myClass.prototype);// true

console.log(myClass.prototype.constructor===myClass);// true

console.log(myClass.prototype.__proto__===Object.prototype);// true   

// Example 2-Hoisting (not hoisted)
// class can be accessed only after its declaration in the code

const newInstance=new myClass();//Uncaught ReferenceError: Cannot access 'myClass' before initialization

class myClass{} 

// Example 3-class expression

const MyClass=class{};

const newInstance=new MyClass();

console.log(newInstance);

console.log(newInstance.__proto__===MyClass.prototype);// true  

// Example 4- constructor method in the class

class computerMouse{
    constructor(props)
    {
        this.type=props.type;
        this.color=props.color;
        this.interface=props.interface;
    }
};

 const propsForWirelessMouse={
  type:"wireless",
  color:"black",
  interface:"bluetooth"

};


const wirelessMouse=new computerMouse(propsForWirelessMouse);

console.log(wirelessMouse);//computerMouse {type: "wireless", color: "black", interface: "bluetooth"}

//CLASS is not object literal and it's methods are not shorthand method names.

// Example 6: Default values for properties

class computerMouse{
    constructor(props)
    {
        this.type=props.type || "Computer";
        this.color=props.color;
        this.interface=props.interface !== undefined ? props.interface :"Not defined";
    }
};

 const propsForWirelessMouse={
  type:"wireless",
  color:"black",
  interface:"bluetooth"

};

const propsForGenericMouse={
 type:"",
 color :"red",
};

const genericMouse=new computerMouse(propsForGenericMouse);


const wirelessMouse=new computerMouse(propsForWirelessMouse);

console.log(wirelessMouse);//computerMouse {type: "wireless", color: "black", interface: "bluetooth"}

console.log(genericMouse);//computerMouse {type: "Computer", color: "red", interface: "Not defined"}


// Example 7-class methods

class computerMouse{
    constructor(props)
    {
        this.type=props.type;
        this.color=props.color;
        this.interface=props.interface;
    }

    mouseInfo()
    {
        console.log(`Type of the mouse is ${this.type} and color is ${this.color}`);
    }
 
    changeMouseType(newType)
    {
       this.type=newType;
    }


};

 const propsForWirelessMouse={
  type:"wireless",
  color:"black",
  interface:"bluetooth"

};


const wirelessMouse=new computerMouse(propsForWirelessMouse);

console.log(wirelessMouse);

wirelessMouse.mouseInfo();//Type of the mouse is wireless and color is black

wirelessMouse.changeMouseType("USB");

console.log(wirelessMouse);//computerMouse {type: "USB", color: "black", interface: "bluetooth"}

wirelessMouse.mouseInfo();//Type of the mouse is USB and color is black



//Example 7- Class extension (add new class to the prototype chain)

class ComputerAccessories{
    constructor(props)
    {
        this.compatibility=props.compatibility || ["PC","MAC"];
    }

}

class ComputerMouse extends ComputerAccessories{
    constructor(...allprops)// rest operator
    {
        console.log(allprops);
        
        super(...allprops)// spread operator

    }


}

const myMouse=new ComputerMouse({compatibility:["MAC"]});

console.log(myMouse);//ComputerMouse {compatibility: Array(1)}  */


// Example 8-Set properties in the different classes


class ComputerAccessories{
    constructor(props)
    {
        this.compatibility=props.compatibility || ["PC","MAC"];
    }

}

// super() must be present in the constructor of child class

class ComputerMouse extends ComputerAccessories{
    constructor(props)
    {
        super(props);
        this.type=props.type;
    }

}

const myMouse=new ComputerMouse(
    {
        compatibility:["MAC"],
        type:"optical"
    
    });

console.log(myMouse);//ComputerMouse {compatibility: Array(1), type: "optical"}



