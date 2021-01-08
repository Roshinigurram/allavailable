var Person1 = /** @class */ (function () {
    function Person1() {
    }
    Person1.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person1.prototype.setFirstName = function (val) {
        this.firstName = val;
    };
    Person1.prototype.setLastName = function (val) {
        this.lastName = val;
    };
    Person1.prototype.getLastName = function () {
        return this.lastName;
    };
    Person1.prototype.GetFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Person1;
}());
var obj1 = new Person1;
obj1.setFirstName('Ganesh');
obj1.setLastName('Yadav');
var result1 = obj1.GetFullName();
console.log(result1);
