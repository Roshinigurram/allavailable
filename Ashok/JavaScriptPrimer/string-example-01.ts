var test = function () {
    // Difference between string, and String
    let str1: string;
    let str2: String;
    str1 = '500 + 100';
    str2 = new String('1 + 1');
    console.log(eval(str1));
    console.log(eval(str2.toString()));
}
test();