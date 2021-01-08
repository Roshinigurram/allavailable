var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.GetFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Person;
}());
var obj = new Person;
obj.firstName = "Swapna";
obj.lastName = "B.Tech";
var result = obj.GetFullName();
console.log(result);
