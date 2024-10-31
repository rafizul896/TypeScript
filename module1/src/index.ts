{
    let friends: string[] = ['a', 'b'];
    const num: number[] = [1, 2];
    let arrName: [number, string] = [50, 'dd'];

    // Reference Type => Object
    const Info: {
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
    function ition(num1: number, num2: number) {
        return num1 + num2
    };
    const addArrow = (num1: number, num2: number): number => num1 + num2;

    // Object function method
    const bankInfo = {
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
    fruits1.push(...fruits2); // OR
    const fruits = [...fruits1, ...fruits2];

    // rest operator
    const greetFriends = (...friends: string[]) => {
        friends.map(fri => ('Hi ' + fri))
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

    // Type alias
    type Student = {
        name: string;
        roll: number;
        gendar: string;
    }

    const student1: Student = {
        name: 'Jamal',
        roll: 11,
        gendar: 'male'
    }

    const student2: Student = {
        name: 'kamal',
        roll: 12,
        gendar: 'male'
    }

    type Addition = (num1: number, num2: number) => number
    const addition: Addition = (num1, num2) => num1 + num2;

}

{
    // union types
    type Gendar = 'male' | 'female';
    const newUser: Gendar = 'male';

    type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper';
    type DeveloperStack = 'MERN Stack' | 'Full Stack';

    type Developer = FrontendDeveloper | DeveloperStack;

    const newDeveloper: Developer = 'Full Stack';
    console.log(newDeveloper)

}