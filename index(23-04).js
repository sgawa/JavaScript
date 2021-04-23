// Example 9: Adding two methods

class ComputerAccessories{
    constructor(props)
    {
        this.compatibility=props.compatibility || ["PC","MAC"];
    }

   compatibilityInfo()
   {
       this.compatibility.forEach(el=>console.log(`Accessory is compatible with ${el}`));//Accessory is compatible with MAC
       //Accessory is compatible with Tablet
   }

}

// super() must be present in the constructor of child class

class ComputerMouse extends ComputerAccessories{
    constructor(props)
    {
        super(props);
        this.type=props.type;
    }

    mouseInfo()
    {
        console.log(`Type of the mouse is ${this.type}`);//Type of the mouse is bluetooth
    }

}

const myMouse=new ComputerMouse(
    {
        compatibility:["MAC","Tablet"],
        type:"bluetooth"
    
    });

console.log(myMouse);//ComputerMouse {compatibility: Array(2), type: "bluetooth"}

myMouse.compatibilityInfo();

myMouse.mouseInfo();



// Example 10: typeOf and instanceOf in classes


class ComputerAccessories{
    constructor(props)
    {
        this.compatibility=props.compatibility || ["PC","MAC"];
    }

   compatibilityInfo()
   {
       this.compatibility.forEach(el=>console.log(`Accessory is compatible with ${el}`));//Accessory is compatible with MAC
       //Accessory is compatible with Tablet
   }

}

// super() must be present in the constructor of child class

class ComputerMouse extends ComputerAccessories{
    constructor(props)
    {
        super(props);
        this.type=props.type;
    }

    mouseInfo()
    {
        console.log(`Type of the mouse is ${this.type}`);//Type of the mouse is bluetooth
    }

}

const myMouse=new ComputerMouse(
    {
        compatibility:["MAC","Tablet"],
        type:"bluetooth"
    
    });

console.log(typeof ComputerMouse);// function

console.log(myMouse instanceof ComputerMouse);// true

console.log(myMouse instanceof ComputerAccessories);// true

console.log(myMouse instanceof Object);// true

console.log(typeof ComputerMouse.prototype);// object

console.log(typeof ComputerMouse.prototype.constructor);// function

console.log(ComputerMouse.prototype.constructor===ComputerMouse);



// Example 11-Static methods

class ComputerMouse{
  constructor(props)
  {
      this.type=props.type;
  }

  static ownClassMethod()
  {
      console.log(`This class sets props for the Mouses`);
  }

  mouseInfo()
  {
      console.log(`Type of the mouse is ${this.type}`);//Type of the mouse is bluetooth
  }

}

const myMouse=new ComputerMouse({type:"Gaming"});

console.log(myMouse);//ComputerMouse {type: "Gaming"}

//myMouse.ownClassMethod();//Uncaught TypeError: myMouse.ownClassMethod is not a function

myMouse.mouseInfo();//Type of the mouse is Gaming

ComputerMouse.ownClassMethod();//This class sets props for the Mouses

ComputerMouse.mouseInfo();//Uncaught TypeError: ComputerMouse.mouseInfo is not a function



// Challenge 1-Convert function constuctors to classes

class Product{
    constructor(props)
  {
      this.price=props.price;
  }

  priceInfo()
  {
      console.log(`Price of the product is ${this.price}`);
  }

}

class ElectricDevice extends Product
{
    constructor(props)
     {
        super(props);
        this.energyEfficiencyClass=props.energyEfficiencyClass;

     }

     energyInfo()
     {
         console.log(`Energy efficiency of the class is ${this.energyEfficiencyClass}`);
     }


}

class TV extends ElectricDevice
{
    constructor(props)
    {
        super(props);
        this.model=props.model;
        this.diagonal=props.diagonal;

    }
}

const propsForMyTV={
    model:"A1235",
    price:1300,
    energyEfficiencyClass:"A++",
    diagonal:42
};

const myTV=new TV(propsForMyTV);

console.log(myTV);//TV {price: 1300, energyEfficiencyClass: "A++", model: "A1235", diagonal: 42}

myTV.energyInfo();//Energy efficiency of the class is A++

myTV.priceInfo();//Price of the product is 1300





