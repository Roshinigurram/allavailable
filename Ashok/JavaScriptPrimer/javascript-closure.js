var myFunc = function (name) {
    var myInnerFunc = function (weather) {
        console.log('Hi ' + name + ', Today is ' + weather);
    };
    myInnerFunc('Raining');
};
myFunc('Friend');
