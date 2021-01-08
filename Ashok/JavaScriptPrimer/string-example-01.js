var test = function () {
    // Difference between string, and String
    var str1;
    var str2;
    str1 = '500 + 100';
    str2 = new String('1 + 1');
    console.log(eval(str1));
    console.log(eval(str2.toString()));
};
test();
