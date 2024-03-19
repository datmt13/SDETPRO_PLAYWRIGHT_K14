const Animal = require("./Animal")
class Horse extends Animal {
    getSpeed(){
        return  super.getSpeed();
    }
}
module.exports = Horse;
