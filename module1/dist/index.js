"use strict";
var _a, _b;
{
    let friends = ['a', 'b'];
    const num = [1, 2];
    let arrName = [50, 'dd'];
    // Reference Type => Object
    const Info = {
        firstName: 'Rafizul',
        lastName: 'Islam',
        Roll: 778452,
        isSingle: true
    };
    // Learning function
    function ition(num1, num2) {
        return num1 + num2;
    }
    ;
    const addArrow = (num1, num2) => num1 + num2;
    // Object function method
    const bankInfo = {
        name: 'Rafiz',
        balance: 0,
        addBalance(balance) {
            return `My new balance is : ${this.balance + balance}`;
        }
    };
    const arr = [1, 3, 5];
    const newArr = arr.map((elem) => elem * elem);
    // Spread operator 
    const fruits1 = ['apple', 'banana', 'cherry'];
    const fruits2 = ['lemon', 'mango'];
    fruits1.push(...fruits2); // OR
    const fruits = [...fruits1, ...fruits2];
    // rest operator
    const greetFriends = (...friends) => {
        friends.map(fri => ('Hi ' + fri));
    };
    greetFriends('Alon', 'Blon', 'Clon');
    //  destructuring
    const userInfo = {
        id: 111,
        name: {
            firstName: 'Rafizul',
            middleName: 'Islam',
            lastName: 'Rafiz'
        },
        address: 'Mymensign'
    };
    const { id, name: { firstName, lastName }, address: from } = userInfo;
    // array destructuring
    const [a, ...rest] = fruits1;
    const student1 = {
        name: 'Jamal',
        roll: 11,
        gendar: 'male'
    };
    const student2 = {
        name: 'kamal',
        roll: 12,
        gendar: 'male'
    };
    const addition = (num1, num2) => num1 + num2;
}
// union types
{
    const newUser = 'male';
    const newDeveloper = 'Full Stack';
    // console.log(newDeveloper)
}
// ternary operator 
{
    const age = 15;
    if (age >= 18) {
        console.log('adul');
    }
    else {
        console.log('not adult');
    }
    const isAdult = age >= 18 ? 'Adult' : 'Not Adult';
}
// nullish coalescing operator
{
    const isAuthenticated = null;
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'Guest';
    console.log(result1);
}
// optional chaining & nullish coalescing operator
{
    const userInfo = {
        id: 111,
        name: {
            firstName: 'Rafizul',
            middleName: 'Islam',
            lastName: 'Rafiz'
        },
        address: {
            city: 'Phulpur',
            road: 'Awesome Road',
            presentAddress: 'Mymensing Phulpur'
        }
    };
    const permanentAddress = (_b = (_a = userInfo === null || userInfo === void 0 ? void 0 : userInfo.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : 'PermanentAddress is Not Avileble';
    console.log(permanentAddress);
}
