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

    console.log(user)
}

