const Animal = require("./Animal")
class Tiger extends Animal {
    constructor(name, maxSpeed){
        super(name,maxSpeed);
    }

    getSpeed(){
        return  super.getSpeed();
    }
}
module.exports = Tiger;