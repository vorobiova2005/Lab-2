import { Human } from './Human';

export class Man extends Human {
    constructor(name, age, weight) {
        super(name, age, weight, "Male");
    }

    greeting() {
        return `Hi! My name is ${this.name}, and I am ${this.age} years old.`;
    }
}
