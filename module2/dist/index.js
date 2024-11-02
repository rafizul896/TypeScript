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
    console.log(user);
}
// Generic Type
{
    // const rollNumbers : number[] = [1,3,5,7,9];
    const rollNumbers = [1, 3, 5, 7, 9];
    const students = ['X', 'Y', 'Z'];
    const boolArray = [true, false, true];
}
