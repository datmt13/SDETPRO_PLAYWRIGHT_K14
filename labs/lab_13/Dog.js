const Animal = require("./Animal")
class Dog extends Animal {
    constructor(name, maxSpeed){
        super(name,maxSpeed);
    }

    getSpeed(){
      return  super.getSpeed();
    }
}

module.exports = Dog;