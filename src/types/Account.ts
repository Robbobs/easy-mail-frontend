import { BaseType } from "./Base"

export interface Account extends BaseType {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}