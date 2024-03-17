class Racing {
    static racing(animals){
        let maxSpeed = animals[0].getSpeed();
        let nameWiner = animals[0].name;
        for (let i = 1; i < animals.length; i++) {
            if (animals[i].getSpeed() > maxSpeed) {
                maxSpeed = animals[i].getSpeed();
                nameWiner =  animals[i].name
            }
        }
        console.log(`Winner is ${nameWiner}, with speed: ${maxSpeed}`);
    }
}

module.exports = Racing