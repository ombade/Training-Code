// ## Vehicle Rental System

// Create Vehicle class with brand, model, rentPricePerDay.
// Subclasses: Car, Bike, Truck.
// Polymorphism: Implement calculateRentalCost(days).

class Vehicle{
    constructor(brand, model, rentPricePerDay){
        this.brand = brand;
        this.model = model;
        this.rentPricePerDay = rentPricePerDay;
        }
        calculateRentalCost(days){
            return this.rentPricePerDay * days;
            }

            getDetails() {
                return `Brand: ${this.brand}, Model: ${this.model}, Rent per day: ${this.rentPricePerDay}, Total Cost: ${this.calculateRentalCost(1)}`;
            }

}
class Bike extends Vehicle{
    calculateRentalCost(days)
    {
        return super.calculateRentalCost(days)*0.2;
    }
}
class Car extends Vehicle{
    calculateRentalCost(days)
    {
        return super.calculateRentalCost(days)*0.15;
    }
}
class Truck extends Vehicle{
    calculateRentalCost(days)
    {
        return super.calculateRentalCost(days)*0.3;
    }
}
const car = new Car("Toyota", "Camry", 50);
const bike = new Bike("Honda", "CBR", 30);
const truck = new Truck("Ford", "F-150", 100);

console.log("The Rental cost of Car for 3 is -> ",car.calculateRentalCost(3)); // Brand: Toyota, Model: Camry, Rent per day: 50, Total Cost: 55
console.log("The Rental cost of BIke for 3 is -> ",bike.calculateRentalCost(3));
console.log("The Rental cost of truck for 3 is -> ",truck.calculateRentalCost(3));