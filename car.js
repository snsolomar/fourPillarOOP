// Encapsulation
class Car {
    constructor(mph, mpg, tankCapacity){
        this.mph = mph
        this.mpg = mpg
        this.tankCapacity = tankCapacity
    }

    // polymorphism
    range(){
        return this.mpg * this.tankCapacity;
    }
}

// Inheritance
class Truck extends Car {
    constructor(mph, mpg, tankCapacity, fuel){
        super(mph, mpg, tankCapacity)
        this.fuel = fuel
    }
    range(){
        return super.range() * 0.9;
    }

    fuelType(){
        return this.fuel;
    }
}

// Abstaction
const honda = new Car(120, 25, 12);
console.log(honda.range());
const chevy = new Truck(120, 25, 12);
console.log(chevy.range())