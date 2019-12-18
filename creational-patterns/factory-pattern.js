class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

class CarFactory {
    createCar(type) {
        switch (type) {
            case 'suzuk':
                return new Car(4, 'V8', 'grey');
            case 'honda':
                return new Car(2, 'V6', 'red');
        }
    }
}

const factory = new CarFactory();

const car = factory.createCar('suzuk');
const honda = factory.createCar('honda');

console.log(honda);
console.log(car);