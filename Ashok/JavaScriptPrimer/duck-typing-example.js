var Person2 = /** @class */ (function () {
    function Person2() {
    }
    Person2.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Person2;
}());
var obj2 = new Person2();
var someObj = {
    firstName: "First",
    lastName: "Last",
    getFullName: function () { return 'first' + 'last'; }
};
var objh = {
    firstName: "First",
    lastName: "Last",
    getFullName: function () { return 'first' + 'last'; }
};
console.log(someObj === objh);
