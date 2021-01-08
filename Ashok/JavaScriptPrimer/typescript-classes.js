"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    // private personId: string;
    // private firstName: string;
    // private lastName: string;
    // Commented for later reference
    // constructor(pId: string, fName: string, lName: string) {
    //     this.personId = pId;
    //     this.firstName = fName;
    //     this.lastName = lName;
    // }
    function Person(personId, firstName, lastName) {
        this.personId = personId;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.Display = function () {
        console.log('Person id: ' + this.personId);
        console.log('First name: ' + this.firstName);
        console.log('Last name: ' + this.lastName);
    };
    return Person;
}());
exports.Person = Person;
// let obj: Person = new Person('1001', 'Chalapathi', 'Raju');
// obj.Display();
