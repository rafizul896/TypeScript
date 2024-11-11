// oop class and object
{
    class Animal {
        // parameter properties 
        constructor(public name: string, public species: string, public sound: string) { }

        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`)
        }
    }

    const dog = new Animal('German Shepard', 'dog', 'Ghew Ghew');
    const cat = new Animal('Mimi', 'firend', 'meaw meaw');
    cat.makeSound();

}

// Inheritance in OOP
{
    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        };
        getSleep(hours: number) {
            console.log(`${this.name} will sleep for ${hours}`)
        };
    }

    class Student extends Person {
        constructor(name: string, age: number, address: string) {
            super(name, age, address);
        }
        getSleep(hours: number) {
            console.log(`${this.name} will sleep for ${hours}`)
        }
    }

    const student1 = new Student('Rafiz', 18, 'Phulpur')
    student1.getSleep(8);

    class Teacher extends Person {
        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address);
            this.designation = designation;
        }
        getSleep(hours: number) {
            console.log(`${this.name} will sleep for ${hours}`)
        }
        takeClass(numOfClass: number) {
            console.log(`${this.name} will take ${numOfClass}`)
        }
    }

    const teacher1 = new Teacher('Mr. Teacher', 38, 'Phulpur', 'Professor');
}

// Type Guard Using Typeof & In
{
    type AlphaNewmeric = string | number;

    const add = (
        param1: AlphaNewmeric, param2: AlphaNewmeric
    ): string | number => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2
        } else {
            return param1.toString() + param2.toString()
        }
    }

    const result1 = add(100, 50);
    const result2 = add(100, "50");

    // in guard
    type NormalUser = {
        name: string,
    }

    type AdminUser = {
        name: string;
        role: 'admin'
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ('role' in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`)
        } else {
            console.log(`My name is ${user.name}`)
        }
    }

    // getUser({ name: 'User', role: 'admin' })
}

// Type guard using instance of
{
    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species
        }

        makeSound() {
            console.log('I am Making sound')
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }
        makeBark() {
            console.log('I am barking');
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }
        makeMeaw() {
            console.log('I am meaw');
        }
    }

    // for smart way
    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    }

    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    }

    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        } else if (isCat(animal)) {
            animal.makeMeaw();
        } else {
            animal.makeSound();
        }
    }

    const dog = new Dog('Dog Bhai', 'dog');
    const cat = new Cat('Cat Bhai', 'cat');
    getAnimal(cat);

}

// Access modifiers
{
    class BankAccount {
        public readonly id: number;
        public userName: string;
        protected _balance: number;

        constructor(id: number, userName: string, balance: number) {
            this.id = id;
            this.userName = userName;
            this._balance = balance;
        }

        public addBalance(amount: number) {
            this._balance = this._balance + amount
        }

        public subtractBalance(amount: number) {
            this._balance = this._balance - amount
        }

        public getBalance() {
            return this._balance
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
        public readonly id: number;
        public userName: string;
        protected _balance: number;

        constructor(id: number, userName: string, balance: number) {
            this.id = id;
            this.userName = userName;
            this._balance = balance;
        }

        // public addBalance(amount: number) { this._balance = this._balance + amount }
        set addBalance(amount: number) {
            this._balance = this._balance + amount;
        }

        // public subtractBalance(amount: number) {this._balance = this._balance - amount;}
        set subtractBalance(amount: number) {
            this._balance = this._balance - amount
        }
        // public getBalance() { return this._balance }
        get getBalance() {
            return this._balance;
        }
    }

    const user1 = new BankAccount(44, 'User', .50);
    user1.addBalance = 19.50; // property er mto kore
    user1.subtractBalance = 5
    const balance = user1.getBalance;
}

// Statics in OOP
{
    class Counter {
        static count: number = 0;

        increment() {
            return (Counter.count = Counter.count + 1)
        }
        decrement() {
            return (Counter.count = Counter.count - 1)
        }
    }

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
                console.log(`I am sleeping for 8 houres perday`)
            }
        }

        class Student extends Person {
            getSleep() {
                console.log(`I am sleeping for 7 houres perday`)
            }
        }

        class Developer extends Person {
            getSleep() {
                console.log(`I am sleeping for 6 houres perday`)
            }
        }

        const getSleepHours = (param: Person) => {
            param.getSleep()
        }

        const person1 = new Person();
        const person2 = new Student();
        const person3 = new Developer();

    }

    {
        class Shape {
            getArea(): number {
                return 0;
            }
        }

        class Circle extends Shape {
            redius: number;

            constructor(redius: number) {
                super();
                this.redius = redius;
            }

            getArea(): number {
                return Math.PI * this.redius * this.redius;
            }
        }

        class Rectangle extends Shape {
            height: number;
            width: number;

            constructor(height: number, width: number) {
                super()
                this.height = height;
                this.width = width;
            }

            getArea(): number {
                return this.height * this.width;
            }
        }

        // Polymorphism
        const getShapeArea = (param: Shape) => {
            console.log(param.getArea());
        }

        const shape1 = new Shape();
        const shape2 = new Circle(2);
        const shape3 = new Rectangle(4, 5);

    }
}

// Abstraction in OOP
{
    //  --> 1. interface  2. abstract

    // idea
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }
    // real
    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log('Starting Engine');
        }
        stopEngine(): void {
            console.log('Stopping Engine');
        }
        move(): void {
            console.log('Move');
        }
        test() {
            console.log('Test');
        }
    }

    const toyotaCar = new Car1();
    // toyotaCar.startEngine();

    // abstract class --> idea
    abstract class Car2 {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;
    }

    class YamahaBike extends Car2 {
        startEngine(): void {
            console.log('Starting Engine YamahaBike')
        }

        stopEngine(): void {
            console.log('Stopping Engine YamahaBike')
        }

        move(): void {
            console.log('Move YamahaBike')
        }
    }

    const fzs = new YamahaBike()
    // fzs.stopEngine()
}

// practice

{

    type ArrayType<T> = Array<T>

    const numArray: ArrayType<number> = [1, 3, 5];
    const stringArray: ArrayType<string> = ['a', 'b', 'c'];
    const boolArray: ArrayType<boolean> = [true, false, true];

    type ContactInfo<T, U> = {
        email: T;
        mobileNumber: U;
    };

    interface Person<T, U, V> {
        fullName: V;
        age: T;
        contactInfo: U;
    };

    const person1: Person<number,
        ContactInfo<string, number>,
        string
    > = {
        fullName: 'user',
        age: 20,
        contactInfo: {
            email: 'user@gmail.com',
            mobileNumber: 10
        }
    };


    function getLength<T extends { length: number }>(str: T) {
        return str.length
    }

    // key Of

    type Book = {
        title: string;
        author: string;
        publishedYear: number;
    }

    function getBookProperty<T, K extends keyof T>(book: T, key: K): T[K] {
        return book[key]
    }

    const myBook: Book = {
        title: 'Data stracture and algorithem',
        author: 'Janker Mahbub',
        publishedYear: 2020
    }

    getBookProperty(myBook, "title")

    const user = {
        id: 222222,
        name: 'User',
        email: 'user@gmail.com',
        role: 'user'
    };

    type userDetails = typeof user;

    const newUser: userDetails = {
        id: 3,
        name: 'new user',
        email: 'newuser@gmail.com',
        role: 'admin'
    }


    const checkAdmin = (user: userDetails) => {
        if ('role' in user && user.role === 'admin') {
            console.log('This User is Amin')
        } else {
            console.log('This is a Normal User')
        }
    }

    type Todo = {
        task: string;
        completed: boolean;
        sueDate: string
    }

    // --> optional Todo
    type OptionalTodo = {
        [T in keyof Todo]?: Todo[T]
    }
}

