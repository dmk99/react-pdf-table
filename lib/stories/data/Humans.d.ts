export interface HumanRow {
    firstName: string;
    lastName: string;
    dob: Date;
    country: string;
    city: string;
    phoneNumber: string;
    randomValues: {
        one: number;
        two: number;
        three: number;
        four: number;
    };
}
export declare function generateRandomData(count: number, maxRandomValue?: number): HumanRow[];
