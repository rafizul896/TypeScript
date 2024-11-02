// Type Assertion
{
    let anything: any;
    anything = 778452;
    anything = 'Next Level';
    const calc = (anything as string).length

    type CustomError = {
        message: string
    }

    try {
        console.log(calc);
    } catch (err) {
        console.log((err as CustomError).message)
    }
}
// Interface
{
    interface User {
        name: string;
        age: number
    }

    interface UserWithRole extends User {
        role: string
    }

    type UserWithRole1 = User & { role: string }

    const user: UserWithRole | UserWithRole1 = {
        name: 'Rafizul',
        age: 35,
        role: 'user'
    }

}
// Generic Type
{
    // const rollNumbers : number[] = [1,3,5,7,9];
    const rollNumbers: Array<number> = [1, 3, 5, 7, 9];

    type GenericArray<T> = Array<T> // for reusable

    const students: GenericArray<string> = ['X', 'Y', 'Z'];
    const boolArray: GenericArray<boolean> = [true, false, true];

    const users: GenericArray<{ name: string, age: number }> = [
        {
            name: 'Alon',
            age: 11
        },
        {
            name: 'Blon',
            age: 12
        }
    ]
    // Generic Tuple
    type GenericTuple<X, Y> = [X, Y];
    const manyThings: GenericTuple<string, number> = ['Apple', 11];
    const userInfo: GenericTuple<number, { name: string, email: string }> = [11111, { name: 'User', email: 'user@gmail.com' }];
} 