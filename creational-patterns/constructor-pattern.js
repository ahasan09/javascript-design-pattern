class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

class Suzuk extends Car {
    constructor(doors, engine, color) {
        super(doors, engine, color);
        this.wheels = 4;
    }
}

const car = new Car(4, 'V8', 'grey');
const honda = new Suzuk(4, 'V6', 'red');

console.log(car);
console.log(honda);