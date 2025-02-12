abstract class Vehicle {
    constructor(
        protected brand: string,
        protected model: string,
        protected rentPricePerDay: number
    ) {}

    abstract calculateRentalCost(days: number): number;

    getDetails(): string {
        return `Brand: ${this.brand}, Model: ${this.model}, Rent per day: ${this.rentPricePerDay}`;
    }
}

class Bike extends Vehicle {
    calculateRentalCost(days: number): number {
        return super.rentPricePerDay * days * 0.2;
    }
}

class Car extends Vehicle {
    calculateRentalCost(days: number): number {
        return super.rentPricePerDay * days * 0.15;
    }
}

class Truck extends Vehicle {
    calculateRentalCost(days: number): number {
        return super.rentPricePerDay * days * 0.3;
    }
}

// Example usage
const car = new Car("Toyota", "Camry", 50);
const bike = new Bike("Honda", "CBR", 30);
const truck = new Truck("Ford", "F-150", 100);

console.log(`The Rental cost of Car for 3 days is -> $${car.calculateRentalCost(3)}`);
console.log(`The Rental cost of Bike for 3 days is -> $${bike.calculateRentalCost(3)}`);
console.log(`The Rental cost of Truck for 3 days is -> $${truck.calculateRentalCost(3)}`);
