"use strict";
// oop class and object
{
    class Animal {
        // parameter properties 
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }
    const dog = new Animal('German Shepard', 'dog', 'Ghew Ghew');
    const cat = new Animal('Mimi', 'firend', 'meaw meaw');
    cat.makeSound();
}
// Inheritance in OOP
{
    class Person {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        ;
        getSleep(hours) {
            console.log(`${this.name} will sleep for ${hours}`);
        }
        ;
    }
    class Student extends Person {
        constructor(name, age, address) {
            super(name, age, address);
        }
        getSleep(hours) {
            console.log(`${this.name} will sleep for ${hours}`);
        }
    }
    const student1 = new Student('Rafiz', 18, 'Phulpur');
    student1.getSleep(8);
    class Teacher extends Person {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        getSleep(hours) {
            console.log(`${this.name} will sleep for ${hours}`);
        }
        takeClass(numOfClass) {
            console.log(`${this.name} will take ${numOfClass}`);
        }
    }
    const teacher1 = new Teacher('Mr. Teacher', 38, 'Phulpur', 'Professor');
}
// Type Guard Using Typeof & In
{
    const add = (param1, param2) => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    const result1 = add(100, 50);
    const result2 = add(100, "50");
    const getUser = (user) => {
        if ('role' in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }
        else {
            console.log(`My name is ${user.name}`);
        }
    };
    // getUser({ name: 'User', role: 'admin' })
}
// Type guard using instance of
{
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log('I am Making sound');
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeBark() {
            console.log('I am barking');
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeMeaw() {
            console.log('I am meaw');
        }
    }
    // for smart way
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const getAnimal = (animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        }
        else if (isCat(animal)) {
            animal.makeMeaw();
        }
        else {
            animal.makeSound();
        }
    };
    const dog = new Dog('Dog Bhai', 'dog');
    const cat = new Cat('Cat Bhai', 'cat');
    getAnimal(cat);
}
// Access modifiers
{
    class BankAccount {
        constructor(id, userName, balance) {
            this.id = id;
            this.userName = userName;
            this._balance = balance;
        }
        addBalance(amount) {
            this._balance = this._balance + amount;
        }
        subtractBalance(amount) {
            this._balance = this._balance - amount;
        }
        getBalance() {
            return this._balance;
        }
    }
    const user1 = new BankAccount(44, 'User', .05);
    user1.addBalance(10);
    const balance = user1.getBalance();
    class StudentAccount extends BankAccount {
        test() {
            this._balance = balance;
        }
    }
    const student1 = new StudentAccount(45, 'Student', 0);
}
// Getter and setter
{
    class BankAccount {
        constructor(id, userName, balance) {
            this.id = id;
            this.userName = userName;
            this._balance = balance;
        }
        // public addBalance(amount: number) { this._balance = this._balance + amount }
        set addBalance(amount) {
            this._balance = this._balance + amount;
        }
        // public subtractBalance(amount: number) {this._balance = this._balance - amount;}
        set subtractBalance(amount) {
            this._balance = this._balance - amount;
        }
        // public getBalance() { return this._balance }
        get getBalance() {
            return this._balance;
        }
    }
    const user1 = new BankAccount(44, 'User', .50);
    user1.addBalance = 19.50; // property er mto kore
    user1.subtractBalance = 5;
    const balance = user1.getBalance;
}
// Statics in OOP
{
    class Counter {
        increment() {
            return (Counter.count = Counter.count + 1);
        }
        decrement() {
            return (Counter.count = Counter.count - 1);
        }
    }
    Counter.count = 0;
    const instance1 = new Counter();
    instance1.increment(); // --> different memory
    const instance2 = new Counter();
    instance2.increment(); // --> different memory
}
// Polymorphism
{
    {
        class Person {
            getSleep() {
                console.log(`I am sleeping for 8 houres perday`);
            }
        }
        class Student extends Person {
            getSleep() {
                console.log(`I am sleeping for 7 houres perday`);
            }
        }
        class Developer extends Person {
            getSleep() {
                console.log(`I am sleeping for 6 houres perday`);
            }
        }
        const getSleepHours = (param) => {
            param.getSleep();
        };
        const person1 = new Person();
        const person2 = new Student();
        const person3 = new Developer();
        // getSleepHours(person1)
        // getSleepHours(person3)
    }
    {
        class Shape {
            getArea() {
                return 0;
            }
        }
        class Circle extends Shape {
            constructor(redius) {
                super();
                this.redius = redius;
            }
            getArea() {
                return Math.PI * this.redius * this.redius;
            }
        }
        class Rectangle extends Shape {
            constructor(height, width) {
                super();
                this.height = height;
                this.width = width;
            }
            getArea() {
                return this.height * this.width;
            }
        }
        // Polymorphism
        const getShapeArea = (param) => {
            console.log(param.getArea());
        };
        const shape1 = new Shape();
        const shape2 = new Circle(2);
        const shape3 = new Rectangle(4, 5);
        // getShapeArea(shape1);
        // getShapeArea(shape2);
        // getShapeArea(shape3);
    }
}
// Abstraction in OOP
{
    // real
    class Car1 {
        startEngine() {
            console.log('Starting Engine');
        }
        stopEngine() {
            console.log('Stopping Engine');
        }
        move() {
            console.log('Move');
        }
        test() {
            console.log('Test');
        }
    }
    const toyotaCar = new Car1();
    // toyotaCar.startEngine();
    // abstract class --> idea
    class Car2 {
    }
    class YamahaBike extends Car2 {
        startEngine() {
            console.log('Starting Engine YamahaBike');
        }
        stopEngine() {
            console.log('Stopping Engine YamahaBike');
        }
        move() {
            console.log('Move YamahaBike');
        }
    }
    const fzs = new YamahaBike();
    // fzs.stopEngine()
}
// practice
{
    const numArray = [1, 3, 5];
    const stringArray = ['a', 'b', 'c'];
    const boolArray = [true, false, true];
    ;
    const person1 = {
        fullName: 'user',
        age: 20,
        contactInfo: {
            email: 'user@gmail.com',
            mobileNumber: 10
        }
    };
    function getLength(str) {
        return str.length;
    }
    function getBookProperty(book, key) {
        return book[key];
    }
    const myBook = {
        title: 'Data stracture and algorithem',
        author: 'Janker Mahbub',
        publishedYear: 2020
    };
    getBookProperty(myBook, "title");
    const user = {
        id: 222222,
        name: 'User',
        email: 'user@gmail.com',
        role: 'user'
    };
    const newUser = {
        id: 3,
        name: 'new user',
        email: 'newuser@gmail.com',
        role: 'admin'
    };
    const checkAdmin = (user) => {
        if ('role' in user && user.role === 'admin') {
            console.log('This User is Amin');
        }
        else {
            console.log('This is a Normal User');
        }
    };
}
