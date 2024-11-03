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
    console.log(result1, result2);

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

    getUser({ name: 'User', role: 'admin' })

}
