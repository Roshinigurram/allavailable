class Person1{
    private firstName: string;
    private lastName: string;

    getFirstName(): string {
        return this.firstName;
    }

    setFirstName(val: string) {
        this.firstName = val;
    }

    setLastName(val: string) {
        this.lastName = val;
    }

    getLastName():string {
        return this.lastName;
    }

    GetFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }

}

let obj1: Person1 = new Person1;
obj1.setFirstName('Ganesh');
obj1.setLastName('Yadav');
let result1: string = obj1.GetFullName();
console.log(result1);
