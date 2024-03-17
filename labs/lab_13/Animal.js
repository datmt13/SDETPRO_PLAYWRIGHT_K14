class Animal {
    constructor(name, maxSpeed){
        this.name = name;
        this.maxSpeed = maxSpeed;
    }

    getSpeed(){
        return Math.floor(Math.random() * this.maxSpeed) + 1;
    }
}

module.exports = Animal;