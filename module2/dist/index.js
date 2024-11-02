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
}
