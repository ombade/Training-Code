class Employee {
    protected _salary: number;

    constructor(public name: string, public id: number, salary: number) {
        this._salary = salary;
    }

    getSalary(): number {
        return this._salary;
    }

    calculateBonus(): number {
        return this._salary;
    }
}

class Manager extends Employee {
    calculateBonus(): number {
        return this._salary * 0.2;
    }
}

class Engineer extends Employee {
    calculateBonus(): number {
        return this._salary * 0.1;
    }
}

class Intern extends Employee {
    calculateBonus(): number {
        return this._salary * 0.01;
    }
}

const manager = new Manager("Om", 1, 100);
const engineer = new Engineer("Ram", 2, 50);
const intern = new Intern("Sham", 3, 10);

console.log("The Bonus of the Manager is ->", manager.calculateBonus());
console.log("The Bonus of the Engineer is ->", engineer.calculateBonus());
console.log("The Bonus of the Intern is ->", intern.calculateBonus());
