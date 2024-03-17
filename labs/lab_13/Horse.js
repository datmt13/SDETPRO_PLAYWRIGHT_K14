const Animal = require("./Animal")
class Horse extends Animal {
    constructor(name, maxSpeed){
        super(name,maxSpeed);
    }

    getSpeed(){
        return  super.getSpeed();
    }
}
module.exports = Horse;