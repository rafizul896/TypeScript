{
    // problem-1
    function repeatString(str: string, num: number): string {
        return str.repeat(num);
    }

    // problem-2
    function findLargestNumber(numbers: number[]): number {
        return Math.max(...numbers);
    }

    // problem-3
    const filterEvenNumbers = (nubers: number[]): number[] => {
        return nubers.filter((num: number) => num % 2 == 0);
    }

    // problem-4
    function reverseArray<T>(arr: T[]): T[] {
        return arr.reverse();
    }

    // problem-5
    interface Student {
        name: string;
        age: number;
        grades: number[];
    }

    function calculateAverageGrade(std: Student) {
        return std.grades.reduce((accumulator, currentValue) => (accumulator + currentValue), 0) / std.grades.length;
    }

    calculateAverageGrade({ name: 'user', age: 222, grades: [11, 22] });

    // problem-6
    type Book = {
        title: string;
        author: string;
        publishedYear: number;
    }

    function isRecentBook(book: Book): boolean {
        const currentYear = new Date().getFullYear();
        return currentYear - book.publishedYear <= 5 && book.publishedYear <= currentYear;
    }

    console.log(isRecentBook({ title: 'The Python Mater', author: 'Mr. X', publishedYear: 2025 }))

    // problem-7
    function logString(input: unknown): void {
        if (typeof input === 'string') {
            console.log(input);
        } else {
            console.error('Error: This input is not a String')
        }
    }

    logString('Hey')

    // problem-8
    class Car {
        brand: string;
        model: string;
        year: number;

        constructor(brand: string, model: string, year: number) {
            this.brand = brand;
            this.model = model;
            this.year = year;
        };

        displayInfo() {
            console.log(`This car brand name is ${this.brand} model name is ${this.model} and publishYear ${this.year}`)
        }
    }

    const car1 = new Car("BMW", 'K90', 2020);
    car1.displayInfo();
    console.log(car1);
}
