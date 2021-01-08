import { Person } from './typescript-classes';

export class Employee extends Person {
    constructor(protected empId: string, protected firstName: string, protected lastName: string) {
        super(empId, firstName, lastName);
    }
}

// let objEmp: Employee = new Employee('1001', 'First', 'Last');
// objEmp.Display();
