import { Person } from "./typescript-classes";

export class Manager extends Person {
    constructor(protected id: string, protected firstName: string, protected lastName: string) {
        super(id,firstName, lastName);
    }
}
