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

    type User = {
        name: string,
        age: number
    }
    const users: GenericArray<User> = [
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

    // Generic with interface
    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string,
            model: string,
            releaseYear: number
        },
        smartWatch: T,
        bike?: X
    }

    type PoorDeveloper = {
        brand: string;
        model: string;
        display: string;
    }
    const poorDeveloper: Developer<PoorDeveloper> = {
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
    }

    interface RichDeveloper {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean;
    }
    const richDeveloper: Developer<RichDeveloper> = {
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
    }
}

// Function with Generics
{
    const createArray = (param: string): string[] => {
        return [param]
    }

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    const res = createArray('Apple');
    const resGeneric = createArrayWithGeneric<boolean>(true);

    interface User {
        id: number;
        name: string
    };

    const resGenericObj = createArrayWithGeneric<User>(
        {
            id: 222,
            name: 'Islam',
        }
    );

    const createArrayWithTuple = <X, Y>(param1: X, param2: Y): [X, Y] => {
        return [param1, param2];
    }

    const resTuple = createArrayWithTuple<string, number>('Hello', 11111);
}

// Constraints In TypeScript
{
    const addCourseStudent = <
        T extends {
            id: number,
            name: string,
            email: string
        }
    >(student: T) => {
        const course = "Next Level Web Development";
        return {
            ...student,
            course
        }
    }

    const resGenericObj = addCourseStudent(
        {
            id: 222,
            name: 'Islam',
            email: 'islam@gmail.com'
        }
    );
}

//  Generic Constraint using key of
{
    type Vehicle = {
        bike: string,
        car: string,
        ship: string,
    }

    type Owner1 = 'bike' | 'car' | 'ship' // manually
    type Owner2 = keyof Vehicle;

    const person: Owner2 = 'bike';

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key]
    }

    const user = {
        name: 'Mr. X',
        age: 100
    }

    const res = getPropertyValue(user, 'name');
    // console.log(res)
}

// Asynchronous typescript
{
    // promise
    type Something = {
        name: string;
        age: number;
    };
    
    const createPromise = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data: Something = { name: 'Mr. X', age: 100 };
            if (data) {
                resolve(data)
            } else {
                reject('failed to load data')
            }
        })
    }
    // calling create promise function
    const showData = async () => {
        const data: Something = await createPromise();
        return data
    }

    console.log(showData())
}