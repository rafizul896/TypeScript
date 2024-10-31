"use strict";
let friends = ['a', 'b'];
const num = [1, 2];
let arrName = [50, 'dd'];
// Reference Type => Object
const user = {
    firstName: 'Rafizul',
    lastName: 'Islam',
    Roll: 778452,
    isSingle: true
};
// Learning function
function add(num1, num2) {
    return num1 + num2;
}
;
const addArrow = (num1, num2) => num1 + num2;
// Object function method
const bankUser = {
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
fruits1.push(...fruits2);
