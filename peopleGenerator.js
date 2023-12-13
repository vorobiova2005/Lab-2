import { Man } from './Man';
import { Woman } from './Woman';
import { getRandomInt } from './utils';

export function generatePeopleList() {
    const people = [];

    for (let i = 0; i < 15; i++) {
        const randomName = `Person${i + 1}`;
        const randomAge = getRandomInt(20, 40);
        const randomWeight = getRandomInt(50, 90);
        const randomGender = getRandomInt(0, 1) === 0 ? "Male" : "Female";

        const person = randomGender === "Male"
            ? new Man(randomName, randomAge, randomWeight)
            : new Woman(randomName, randomAge, randomWeight);

        people.push(person);
    }

    return people;
}