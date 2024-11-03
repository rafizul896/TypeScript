"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
//  Generic Constraint using key of
{
    const person = 'bike';
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: 'Mr. X',
        age: 100
    };
    const res = getPropertyValue(user, 'name');
    // console.log(res)
}
// Asynchronous typescript
{
    const createPromise = () => {
        return new Promise((resolve, reject) => {
            const data = { name: 'Mr. X', age: 100 };
            if (data) {
                resolve(data);
            }
            else {
                reject('failed to load data');
            }
        });
    };
    // calling create promise function
    const showData = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield createPromise();
        return data;
    });
    console.log(showData());
}
// Conditional types
{
}
// Mapped types
{
    const arrOfNumbers = [1, 3, 5];
    const arrOfStrings = arrOfNumbers.map(num => num.toString());
    const area = {
        height: 100,
        width: '150'
    };
}
