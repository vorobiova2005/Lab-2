// 2 task
const year_now = new Date().getFullYear();

let getAgeInfo = (name, birthYear=year_now) => {
    if (birthYear === null) {
        return `Я ${name}.`;
    } else {
        let age = year_now - birthYear;
        return `Я ${name}, мені ${age} років.`;
    }
};

// console.log(year_now);
alert(getAgeInfo("Valentina", 2005));


// 3 task
class Human {
    constructor(name, age, weight, gender) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.gender = gender;
    }
    
    getInfo(prop) {
        if (prop === null) {
            let info = `Name: ${this.name}\nAge: ${this.age}\nWeight: ${this.weight}\nGender: ${this.gender}`;
            return info;
        } else if (Object.keys(this).includes(prop)) {
            return this[prop];
        } else {
            return `Invalid property: ${prop}`;
        }
    }

    greeting() {
        return "Hi!";
    }
}

const person = new Human("John", 30, 70, "Male");

// alert(person.getInfo('age'));

// Task 6
class Man extends Human {
    constructor(name, age, weight) {
        // Виклик конструктора базового класу
        super(name, age, weight, "Male");
    }

    greeting() {
        return `Hi! My name is ${this.name}, and I am ${this.age} years old.`;
    }
}

class Woman extends Human {
    constructor(name, age, weight) {
        // Виклик конструктора базового класу
        super(name, age, weight, "Female");
    }

    greeting() {
        return `Hi! My name is ${this.name}.`;
    }
}

const john = new Man("John", 30, 70);
const jane = new Woman("Jane", 25, 60);


// alert(john.greeting());
// alert(jane.greeting());

// Task 7
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

// Перевірка результату
for (const person of people) {
    // alert(person.getInfo());
    // alert(person.greeting());
}

const searchPeople = (list, searchField, searchValue) => {
    const delay = 1000; // Затримка у мілісекундах


    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const results = list.filter(person => person[searchField] === searchValue);


            if (results.length > 0) {
                resolve(results);
            } else {
                reject(`За пошуком по ${searchField}:${searchValue} не знайдено.`);
            }
        }, delay);
    });
};

searchPeople(people, "name", "Person7")
    .then(results => {
        console.log("Результати пошуку:");
        for (const person of results) {
            console.log(person.getInfo(null));
        }
    })
    .catch(errorMessage => console.log(errorMessage));

