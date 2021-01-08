import { Person } from './typescript-classes';
import { Employee } from './inheritance-example';
import { Manager } from './manager';
let objPerson: Person;
//objPerson = new Person('1001', 'Chalapathi', 'Raju');
//objPerson = new Employee('1002', 'Emp First', 'Emp Last');
objPerson = new Manager('1003', 'Mgr First', 'Mgr Last');
objPerson.Display();
