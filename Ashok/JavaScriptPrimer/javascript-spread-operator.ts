let myFunc4 = function() {
    let array1 = new Array(1,2,3);
    let array2 = [...array1, 4,5,6];
    for(let i=0;i<array2.length; i++) {
        console.log(array2[i]);
    }
}
myFunc4();
