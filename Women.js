import { Human } from './Human';

export class Woman extends Human {
    constructor(name, age, weight) {
        super(name, age, weight, "Female");
    }

    greeting() {
        return `Hi! My name is ${this.name}.`;
    }
}
