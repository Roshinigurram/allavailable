var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var myFunc4 = function () {
    var array1 = new Array(1, 2, 3);
    var array2 = __spreadArrays(array1, [4, 5, 6]);
    for (var i = 0; i < array2.length; i++) {
        console.log(array2[i]);
    }
};
myFunc4();
