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
}

console.log(user);
