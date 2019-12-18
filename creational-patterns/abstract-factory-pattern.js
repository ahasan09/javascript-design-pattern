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
            case 'bmw':
                return new Car(4, 'V8', 'grey');
            case 'honda':
                return new Car(2, 'V6', 'red');
        }
    }
}

class Suzuk {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

class SuzukFactory {
    createSuzuk(type) {
        switch (type) {
            case 'suzuk':
                return new Suzuk(7, 'V9', 'yellow');
            case 'sx5':
                return new Suzuk(3, 'V7', 'green');
        }
    }
}

const carFactory = new CarFactory();
const suzukFactory = new SuzukFactory();

const autoManufacturer = (type, model) => {
    switch (type) {
        case 'car':
            return carFactory.createCar(model);
        case 'suz':
            return suzukFactory.createSuzuk(model);
    }
}

const sx5 = autoManufacturer('suz', 'sx5');

const bmw = autoManufacturer('car', 'honda');

console.log(sx5);
console.log(bmw);