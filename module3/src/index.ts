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
    console.log(student1);
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

