interface IPerson {
    firstName: string;
    lastName: string;
    GetFullName() : string;   
}

class Person implements IPerson{
    firstName: string;
    lastName: string;
    GetFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }

}

let obj: Person = new Person;
obj.firstName = "Swapna";
obj.lastName = "B.Tech";
let result: string = obj.GetFullName();
console.log(result);
