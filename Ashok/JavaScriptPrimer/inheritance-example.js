"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Employee = void 0;
var typescript_classes_1 = require("./typescript-classes");
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(empId, firstName, lastName) {
        var _this = _super.call(this, empId, firstName, lastName) || this;
        _this.empId = empId;
        _this.firstName = firstName;
        _this.lastName = lastName;
        return _this;
    }
    return Employee;
}(typescript_classes_1.Person));
exports.Employee = Employee;
// let objEmp: Employee = new Employee('1001', 'First', 'Last');
// objEmp.Display();
