const Animal = require("./Animal")
class Dog extends Animal {
    getSpeed(){
      return  super.getSpeed();
    }
}

module.exports = Dog;
