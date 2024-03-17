const Dog = require("./Dog");
const Horse = require("./Horse");
const Tiger = require("./Tiger");
const Racing = require("./Racing");

const animalDog = new Dog("Dog", 60);
const animalHorse = new Horse("Horse", 75);
const animalTiger = new Tiger("Tiger", 100);

Racing.racing([animalDog, animalHorse, animalTiger]);