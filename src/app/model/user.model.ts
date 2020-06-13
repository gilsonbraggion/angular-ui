import { Company } from './company.model';
import { Address } from './address.model';

export class User {

    id: number;
    name: string;
    username: string;
    email: string;
    adrress: Address;
    phone: string;
    website: string;
    company: Company;

}
