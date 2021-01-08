  class Person2 
{
    firstName: string;
    lastName: string;
    f:number;
    getFullName(): string 
    {
        return this.firstName + ' ' + this.lastName;
    }
}

let obj2 = new Person2();

let someObj = 
{
    firstName : "First",
    lastName : "Last",
    getFullName : () => 'first'+ 'last'
}

let objh = 
{
    firstName : "First",
    lastName : "Last",
    getFullName : () => 'first'+ 'last'
}
console.log(someObj===objh);
