"use strict";
// Type Assertion
{
    let anything;
    anything = 778452;
    anything = 'Next Level';
    const calc = anything.length;
    try {
        console.log(calc);
    }
    catch (err) {
        console.log(err.message);
    }
}
// Interface
{
    const user = {
        name: 'Rafizul',
        age: 35,
        role: 'user'
    };
}
// Generic Type
{
    // const rollNumbers : number[] = [1,3,5,7,9];
    const rollNumbers = [1, 3, 5, 7, 9];
    const students = ['X', 'Y', 'Z'];
    const boolArray = [true, false, true];
    const users = [
        {
            name: 'Alon',
            age: 11
        },
        {
            name: 'Blon',
            age: 12
        }
    ];
    const manyThings = ['Apple', 11];
    const userInfo = [11111, { name: 'User', email: 'user@gmail.com' }];
    const poorDeveloper = {
        name: 'Rafizul',
        computer: {
            brand: 'Hp',
            model: 'Pavilion 15',
            releaseYear: 2022
        },
        smartWatch: {
            brand: 'Emilab',
            model: 'Kw55',
            display: 'Oled'
        }
    };
    const richDeveloper = {
        name: 'Islam',
        computer: {
            brand: 'Apple',
            model: 'applw 15',
            releaseYear: 2024
        },
        smartWatch: {
            brand: 'Apple Watch',
            model: 'Kw55',
            heartTrack: true,
            sleepTrack: true
        }
    };
}
// Function with Generics
{
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const res = createArray('Apple');
    const resGeneric = createArrayWithGeneric(true);
    ;
    const resGenericObj = createArrayWithGeneric({
        id: 222,
        name: 'Islam',
    });
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const resTuple = createArrayWithTuple('Hello', 11111);
}
// Constraints In TypeScript
{
    const addCourseStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const resGenericObj = addCourseStudent({
        id: 222,
        name: 'Islam',
        email: 'islam@gmail.com'
    });
}
