let friends: string[] = ['a', 'b'];
const num: number[] = [1, 2];
let arrName: [number, string] = [50, 'dd'];

// Reference Type => Object
const user: {
    readonly firstName: string;
    lastName?: string; //Optional type
    isSingle: boolean;
    Roll: 778452; // type --> literal
} = {
    firstName: 'Rafizul',
    lastName: 'Islam',
    Roll: 778452,
    isSingle: true
};

// Learning function
function add(num1: number, num2: number) {
    return num1 + num2
};
const addArrow = (num1: number, num2: number): number => num1 + num2;

// Object function method
const bankUser = {
    name: 'Rafiz',
    balance: 0,
    addBalance(balance: number): string {
        return `My new balance is : ${this.balance + balance}`
    }
}

const arr: number[] = [1, 3, 5];
const newArr: number[] = arr.map((elem: number): number => elem * elem);

// Spread operator 

const fruits1: string[] = ['apple', 'banana', 'cherry'];
const fruits2: string[] = ['lemon', 'mango'];
fruits1.push(...fruits2);


