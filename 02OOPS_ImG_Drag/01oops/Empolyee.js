// ## Employee Management System

// Create Employee class with name, id, #salary.
// Subclasses: Manager, Engineer, Intern.
// Polymorphism: Override calculateBonus() for each role.

class Employee {
    constructor(name , id ,salary)
    {
        this.name = name;
        this.id = id;
        this._salary = salary;
    }
    _salary;
    getSalary()
    {
        return this._salary;
        } 
calutateBonus()
{
    return this.salary;
}   
}
class Manager extends Employee{
  calutateBonus()
  {
    return this._salary*0.2;
  }
}

class Engineer extends Employee{
    calutateBonus()
    {
      return this._salary*0.1;
    }
  }


  class Intern extends Employee{
    calutateBonus()
    {
      return this._salary*0.01;
    }
  }

 const mangaer = new Manager("Om",1 ,100);
 const engineer = new Engineer("Ram",2 ,50);
const  intern = new Intern("Sham",1 ,10);

console.log("The Bonus of the Manger is -> ",mangaer.calutateBonus())

console.log("The Bonus of the engineer is -> ",engineer.calutateBonus())

console.log("The Bonus of the intern is -> ",intern.calutateBonus())