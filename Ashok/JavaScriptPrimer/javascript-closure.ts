let myFunc = function(name) {
    let myInnerFunc = function(weather) {
        console.log('Hi ' + name + ', Today is ' + weather);      
    }
    myInnerFunc('Raining');
};
myFunc('Friend');
