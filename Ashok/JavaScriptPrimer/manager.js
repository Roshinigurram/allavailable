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
exports.Manager = void 0;
var typescript_classes_1 = require("./typescript-classes");
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, firstName, lastName) {
        var _this = _super.call(this, id, firstName, lastName) || this;
        _this.id = id;
        _this.firstName = firstName;
        _this.lastName = lastName;
        return _this;
    }
    return Manager;
}(typescript_classes_1.Person));
exports.Manager = Manager;
