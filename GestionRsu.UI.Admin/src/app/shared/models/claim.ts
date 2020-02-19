
export class Claim {
    children = new Array<Claim>();
    type: string;
    value: string;
    expandable: boolean;
    level: number;
    checked: boolean;
}
