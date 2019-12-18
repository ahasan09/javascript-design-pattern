let instance = null;

class Car {
    constructor(doors, engine, color) {
        if (!instance) {
            this.doors = doors;
            this.engine = engine;
            this.color = color;
            instance = this;
        }
        else {
            return instance;
        }
    }
}

const car = new Car(4, 'V8', 'grey');
const honda = new Car(4, 'V6', 'red');

console.log(car);
console.log(honda);