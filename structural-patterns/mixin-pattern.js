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

let carMixin = {
    revEngine() {
        console.log(`The ${this.engine} is doing Vroom Vroom!`);
    }
}

const factory = new CarFactory();

Object.assign(Car.prototype, carMixin);

const car = factory.createCar('suzuk');

car.revEngine();