import * as faker from "faker";

export interface HumanRow {
    firstName: string;
    lastName: string;
    dob: Date;
    country: string;
    city: string;
    phoneNumber: string;
}

export function generateRandomData(count: number): HumanRow[] {
    const output: HumanRow[] = [];

    for(let i = 0; i < count; i++) {
        output.push({
            firstName: faker.name.findName(),
            lastName: faker.name.lastName(),
            dob: faker.date.past(100),
            country: faker.address.country(),
            city: faker.address.city(),
            phoneNumber: faker.phone.phoneNumber()
        })
    }

    return output;
}
