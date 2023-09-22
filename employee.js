// Encapsulation
class Employee {
    constructor(wage, hoursWorked){
        this.wage = wage;
        this.hoursWorked = hoursWorked;
    }

    getPay(){
        return this.wage * this.hoursWorked;
    }
}

// Inheritance
class Manager extends Employee {
    constructor(wage, hoursWorked, bonus){
        super(wage, hoursWorked);
        this.bonus = bonus;
    }

    getPay(){
        return super.getPay() + this.bonus;
    }
}

// Abstraction

const manager = new Manager(20, 40, 200);
console.log("manager makes:", manager.getPay()); // You don't need to know how getPay() works, just that it does

// Polymorphism

function calculateTotalPay(employee){
    return employee.getPay();
}

const regularEmployee = new Employee(15,40);
console.log("regular employee makes:", calculateTotalPay(regularEmployee));
console.log("Manager makes:", calculateTotalPay(manager)); 


