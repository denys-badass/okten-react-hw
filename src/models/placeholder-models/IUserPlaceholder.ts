import {IAddressPlaceholder} from "./IAddressPlaceholder.ts";
import {ICompanyPlaceholder} from "./ICompanyPlaceholder.ts";

export interface IUserPlaceholder {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddressPlaceholder;
  phone: string;
  website: string;
  company: ICompanyPlaceholder;
}