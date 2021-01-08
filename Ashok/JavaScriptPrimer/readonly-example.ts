class Person3 {
    readonly x: number;

    //someOtherMethod() {
    //    this.x = 10; //This is error as we cannot assign values
    //                 //to readonly fields outside of constructor
    //}

    constructor(num: number) {
        this.x = num;//This is PERFECTLY VALID as we can assign
                     //values to readonly fields INSIDE OF CONSTRUCTOR
    }
}

let obj3 = new Person3(10);
