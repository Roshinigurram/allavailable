export class Person {
    // private personId: string;
    // private firstName: string;
    // private lastName: string;

    // Commented for later reference
    // constructor(pId: string, fName: string, lName: string) {
    //     this.personId = pId;
    //     this.firstName = fName;
    //     this.lastName = lName;
    // }

    constructor(protected personId: string, protected firstName: string, protected lastName: string) {

    }

    Display() : void {
        console.log('id: ' +this.personId);
        console.log('First name: ' + this.firstName);
        console.log('Last name: ' + this.lastName);
    }
}

// let obj: Person = new Person('1001', 'Chalapathi', 'Raju');
// obj.Display();
