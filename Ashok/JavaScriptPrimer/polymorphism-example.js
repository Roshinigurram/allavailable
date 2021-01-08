"use strict";
exports.__esModule = true;
var manager_1 = require("./manager");
var objPerson;
//objPerson = new Person('1001', 'Chalapathi', 'Raju');
//objPerson = new Employee('1002', 'Emp First', 'Emp Last');
objPerson = new manager_1.Manager('1001', 'Mgr First', 'Mgr Last');
objPerson.Display();
