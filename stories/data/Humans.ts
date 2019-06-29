import * as faker from "faker";

export interface HumanRow {
    firstName: string;
    lastName: string;
    dob: Date;
    country: string;
    city: string;
    phoneNumber: string;
    randomValues: {
        one: number,
        two: number,
        three: number,
        four: number
    }
}

export function generateRandomData(count: number, maxRandomValue: number = 100): HumanRow[] {
    const output: HumanRow[] = [];

    for(let i = 0; i < count; i++) {
        output.push({
            firstName: faker.name.findName(),
            lastName: faker.name.lastName(),
            dob: faker.date.past(100),
            country: faker.address.country(),
            city: faker.address.city(),
            phoneNumber: faker.phone.phoneNumber(),
            randomValues: {
                one: Math.ceil(Math.random() * maxRandomValue),
                two: Math.ceil(Math.random() * maxRandomValue),
                three: Math.ceil(Math.random() * maxRandomValue),
                four: Math.ceil(Math.random() * maxRandomValue)
            }
        })
    }

    return output;
}
