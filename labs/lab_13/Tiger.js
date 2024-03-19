const Animal = require("./Animal")
class Tiger extends Animal {
    getSpeed(){
        return  super.getSpeed();
    }
}
module.exports = Tiger;
