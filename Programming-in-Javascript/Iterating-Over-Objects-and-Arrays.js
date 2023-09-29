// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for (let element of dairy) {
        console.log(element)
    }
}

logDairy();

// Task 2
const animal = {

canJump: true
    
};
    
const bird = Object.create(animal);
    
bird.canFly = true;
    
bird.hasFeathers = true;

function birdCan() {
    let birdCanArray = Object.entries(bird);
    for ([key, value] of birdCanArray) {
        console.log(`${key}: ${value}`);
    }
}

birdCan();

// Task 3
function animalCan() {
    let birdCanArray = Object.entries(bird);
    let animalCanArray = Object.entries(animal);
    for ([key, value] of birdCanArray) {
        console.log(`${key}: ${value}`);
    }
    for ([key, value] of animalCanArray) {
        console.log(`${key}: ${value}`);
    }
}

animalCan();