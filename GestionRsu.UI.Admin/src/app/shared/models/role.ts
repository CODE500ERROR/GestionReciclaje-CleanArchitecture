import { Claim } from './claim';

export class Role {
  value: string;
  id: number;
  checked: boolean;
  claims = new Array<Claim>();
}
