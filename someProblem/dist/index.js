"use strict";
{
    // problem-1
    function repeatString(str, num) {
        return str.repeat(num);
    }
    // problem-2
    function findLargestNumber(numbers) {
        return Math.max(...numbers);
    }
    // problem-3
    const filterEvenNumbers = (nubers) => {
        return nubers.filter((num) => num % 2 == 0);
    };
    // problem-4
    function reverseArray(arr) {
        return arr.reverse();
    }
    function calculateAverageGrade(std) {
        return std.grades.reduce((accumulator, currentValue) => (accumulator + currentValue), 0) / std.grades.length;
    }
    calculateAverageGrade({ name: 'user', age: 222, grades: [11, 22] });
    function isRecentBook(book) {
        const currentYear = new Date().getFullYear();
        return currentYear - book.publishedYear <= 5 && book.publishedYear <= currentYear;
    }
    console.log(isRecentBook({ title: 'The Python Mater', author: 'Mr. X', publishedYear: 2025 }));
    // problem-7
    function logString(input) {
        if (typeof input === 'string') {
            console.log(input);
        }
        else {
            console.error('Error: This input is not a String');
        }
    }
    logString('Hey');
    // problem-8
    class Car {
        constructor(brand, model, year) {
            this.brand = brand;
            this.model = model;
            this.year = year;
        }
        ;
        displayInfo() {
            console.log(`This car brand name is ${this.brand} model name is ${this.model} and publishYear ${this.year}`);
        }
    }
    const car1 = new Car("BMW", 'K90', 2020);
    car1.displayInfo();
    console.log(car1);
}
